import Ember from 'ember';

export default Ember.ObjectController.extend({
  collapseAll: false,
  actions: {
    addOption: function(page) {
      var options = page.get('options');
      options.pushObject(this.get('store').createRecord('option'));
    },
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
      page.save().then(function(page) {
        console.log('page saved');
        var options = page.get('options');
        for(var i = 0; i < page.get('options.length'); i++) {
          options.objectAt(i).save();
        }
        _this.get('model.pages').addObject(page);
        _this.get('model').save();
      }, function(err) {
        console.log('error', err);
      });
    },
    deletePage: function(page) {
      this.get('model.pages').removeObject(page);
      this.get('model').save().then(function() {
        page.destroyRecord();
      }, function(err) {
        console.log('error', err);
      });
    }
  }
});
