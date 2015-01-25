import Ember from 'ember';

var $ = Ember.$;

export default Ember.Component.extend({
  init: function() {
    var _this = this;
    $(document).ready(function() {
      _this.get('story').then(function(story) {
        $('body').css({
          'background': 'url(' + story.get('img') + ')',
          'background-size': 'cover',
          'background-repeat': 'repeat',
        });

        $('.story-title em').html(story.get('title'));
      });
    });
  }
});
