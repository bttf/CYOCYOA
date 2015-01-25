import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    newPage: function() {
      var pages = this.get('model.pages');
      var length = pages.get('length');
      pages.pushObject(this.get('store').createRecord('page', {
        title: 'Page #'+ (length + 1)
      }));
    }
  }
});
