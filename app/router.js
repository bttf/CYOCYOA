import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("login");
  this.resource("story", { path: '/story/:id' }, function() {
  });
  this.route("published", { path: '/published/:id' });
});

export default Router;
