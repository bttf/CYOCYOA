import Ember from 'ember';

function addUserIfDoesNotExist(_this, uid) {
  _this.get('store').find('user', uid).then(function(user) {
    if (user) {
      console.log('user exists');
      _this.transitionToRoute('index');
    }
  }, function(err) {
    if (err.message.indexOf('no record was found') !== -1) {
      console.log('user does not exist');
      var user = _this.get('store').createRecord('user', {
        uid: uid
      });
      user.set('id', uid);
      user.save().then(function(user) {
        console.log('user created', user);
        _this.transitionToRoute('index');
      }, function(err) {
        console.log('error creating user', err);
      });
    } else {
      console.log('error', err);
    }
  });
}

export default Ember.Controller.extend({
  actions: {
    fbLogin: function() {
      var _this = this;
      this.get('session').authenticate('authenticator:facebook').then(function() {
        console.log('login success');
        var uid = _this.get('session.authData.uid');
        addUserIfDoesNotExist(_this, uid);
      }, function(err) {
        console.log('login failure', err);
      });
    },

    gitLogin: function() {
      var _this = this;
      this.get('session').authenticate('authenticator:github').then(function() {
        var uid = _this.get('session.authData.uid');
        addUserIfDoesNotExist(_this, uid);
      }, function(err) {
        console.log('login failure', err);
      });
    },

    gLogin: function() {
      var _this = this;
      this.get('session').authenticate('authenticator:google').then(function() {
        console.log('login success');
        var uid = _this.get('session.authData.uid');
        addUserIfDoesNotExist(_this, uid);
      }, function(err) {
        console.log('login failure', err);
      });
    },

    anonLogin: function() {
      var _this = this;
      this.get('session').authenticate('authenticator:anonymous').then(function() {
        console.log('login success');
        var uid = _this.get('session.authData.uid');
        addUserIfDoesNotExist(_this, uid);
      }, function(err) {
        console.log('login failure', err);
      });
    }
  }
});
