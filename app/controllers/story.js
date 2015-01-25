import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    newPage: function() {
      var pages = this.get('model.pages');
      pages.pushObject(this.get('store').createRecord('page'));
    }
  }
});
