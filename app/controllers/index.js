import Ember from 'ember';

export default Ember.ObjectController.extend({
  uid: Ember.computed.alias('session.authData.uid'),
  newStory: Ember.computed.alias('model.newStory'),
  actions: {
    saveNewStory: function() {
      console.log(this.get('newStory.title'));
      console.log(this.get('uid'));
      // set user to story
      var _this = this;
      this.store.find('user', this.get('uid')).then(function(user) {
        _this.set('newStory.user', user);
        _this.get('newStory').save().then(function(story) {
          var stories = user.get('stories');
          stories.pushObject(story);
          user.save().then(function() {
            console.log('user updated');
            _this.transitionToRoute('story', story)
          });
        });
      }, function(err) {
        console.log('error', err);
      });
    }
  }
});
