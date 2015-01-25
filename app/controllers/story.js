import Ember from 'ember';

export default Ember.ObjectController.extend({
  collapseAll: false,
  actions: {
    toggleCollapseAll: function() {
      this.set('collapseAll', !this.get('collapseAll'));
    },
    newPage: function() {
      var pages = this.get('model.pages');
      var length = pages.get('length');
      pages.pushObject(this.get('store').createRecord('page', {
        title: 'Page #'+ (length + 1)
      }));
    },
    savePage: function(page) {
      console.log('saving page');
      var _this = this;
      page.save().then(function() {
        console.log('page saved');
        _this.get('model.pages').addObject(page);
        _this.get('model').save();
      }, function(err) {
        console.log('error', err);
      });
    },
    deletePage: function(page) {
      page.destroyRecord();
    }
  }
});
