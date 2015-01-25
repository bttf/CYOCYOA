import Ember from 'ember';

export default Ember.ObjectController.extend({
  collapseAll: false,
  pendingDelete: false,
  actions: {
    addOption: function(page) {
      var _this = this;
      page.get('options').then(function(options) {
        options.pushObject(_this.get('store').createRecord('option'));
      });
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
    },
    deleteOption: function(option) {
      option.get('parentPage').then(function(page) {
        page.get('options').removeObject(option);
        page.save().then(function() {
          option.destroyRecord();
        });
      });
    },
    toggleDelete: function() {
      if (this.get('pendingDelete')) {
        var _this = this;
        var story = this.get('model');
        story.get('pages').then(function(pages) {
          for(var i = 0; i < pages.get('length'); i++) {
            pages.objectAt(i).get('options').then(function(options) {
              for(var i = 0; i < options.get('length'); i++) {
                options.objectAt(i).destroyRecord();
              }
            });
            pages.objectAt(i).destroyRecord();
          }
        }, function(err) {
          console.log('error', err);
        });
        story.get('user').then(function(user) {
          user.get('stories').then(function(stories) {
            stories.removeObject(story);
            user.save();
          });
        }, function(err) {
          console.log('error', err);
        });
      }
      this.set('pendingDelete', !this.get('pendingDelete'));
    }
  }
});
