import DS from 'ember-data';
import ENV from 'cyocyoa/config/environment';

export default DS.FirebaseAdapter.extend({
  firebase: new window.Firebase('https://' + ENV.APP.firebaseInstance + '.firebaseio.com')
});
