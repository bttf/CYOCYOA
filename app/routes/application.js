import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

function addUserIfDoesNotExist(uid) {
  var _this = this;
  this.get('store').find('user', uid).then(function(user) {
    if (user) {
      console.log('user exists');
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
      }, function(err) {
        console.log('error creating user', err);
      });
    } else {
      console.log('error', err);
    }
  });
}

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    sessionAuthenticationSucceeded: function() {
      var _this = this;
      var uid = this.get('session.authData.uid');
      addUserIfDoesNotExist.call(this, uid);
    }
  }
});
