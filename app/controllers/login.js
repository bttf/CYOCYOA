import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    fbLogin: function() {
      var _this = this;
      this.get('session').authenticate('authenticator:facebook').then(function() {
        console.log('login success');
        _this.transitionToRoute('index');
      }, function(err) {
        console.log('login failure', err);
      });
    },

    gitLogin: function() {
      var _this = this;
      this.get('session').authenticate('authenticator:github').then(function() {
        console.log('login success');
        _this.transitionToRoute('index');
      }, function(err) {
        console.log('login failure', err);
      });
    },

    gLogin: function() {
      var _this = this;
      this.get('session').authenticate('authenticator:google').then(function() {
        console.log('login success');
        _this.transitionToRoute('index');
      }, function(err) {
        console.log('login failure', err);
      });
    },

    anonLogin: function() {
      var _this = this;
      this.get('session').authenticate('authenticator:anonymous').then(function() {
        console.log('login success');
        _this.transitionToRoute('index');
      }, function(err) {
        console.log('login failure', err);
      });
    }
  }
});
