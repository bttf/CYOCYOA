import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
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
