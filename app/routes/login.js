import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    fbLogin: function() {
      this.get('session').authenticate('authenticator:facebook').then(function() {
        console.log('login success');
      }, function(err) {
        console.log('login failure', err);
      });
    },

    gitLogin: function() {
      this.get('session').authenticate('authenticator:github').then(function() {
        console.log('login success');
      }, function(err) {
        console.log('login failure', err);
      });
    },

    gLogin: function() {
      this.get('session').authenticate('authenticator:google').then(function() {
        console.log('login success');
      }, function(err) {
        console.log('login failure', err);
      });
    },

    anonLogin: function() {
      this.get('session').authenticate('authenticator:anonymous').then(function() {
        console.log('login success');
      }, function(err) {
        console.log('login failure', err);
      });
    },

    logout: function() {
      var authenticator = this.get('session.authenticator');
      if (authenticator === 'authenticator:facebook') {
        this.get('session').invalidate(authenticator).then(function() {
          console.log('session invalidated');
        }, function(err) {
          console.log('error', error);
        });
      } else if (authenticator === 'authenticator:github') {
        this.get('session').invalidate(authenticator).then(function() {
          console.log('session invalidated');
        }, function(err) {
          console.log('error', error);
        });
      } else if (authenticator === 'authenticator:anonymous') {
        this.get('session').invalidate(authenticator).then(function() {
          console.log('session invalidated');
        }, function(err) {
          console.log('error', error);
        });
      }
    }
  }
});
