import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.find('user', this.get('session.authData.uid'));
  },
  afterModel: function(model) {
    model.set('newStory', this.store.createRecord('story'));
  }
});
