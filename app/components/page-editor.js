import Ember from 'ember';

//var uuid = window.uuid;

export default Ember.Component.extend({
  classNames: ['page-editor'],
  classNameBindings: ['isCollapsed'],
  isCollapsed: false,
  fileSizeError: false,
  imgInputId: function() {
    return uuid.v4();
  }.property(),

  attachEvents: function() {
    var component = this;
    function handleFileInput(e) {
      var file = e.target.files[0];
      if (!file.type.match('image.*')) return;
      var reader = new FileReader();
      reader.onload = (function(f) {
        return function(e) {
          var size = f.size / 1024;
          if (size > 850) {
            console.log('filesize');
            //$('.file-size-error').show();
            component.set('fileSizeError', true);
            return;
          } else {
            //$('.filesize-err').hide();
            component.set('fileSizeError', false);
          }
          // $.ajax({
          //   type: 'PATCH',
          //   url: 'https://' + ENV.APP.firebaseInstance + '.firebaseio.com/stories/' + component.get('story.id') + '/.json',
          //   data: '{ "img": "' + e.target.result + '" }',
          //   success: function() {
          //     console.log('success');
          //   },
          //   error: function(xhr, status, err) {
          //     console.log('error', err);
          //   }
          // });
        };
      })(file);
      reader.readAsDataURL(file);
    }
    $('#' + component.get('imgInputId')).change(handleFileInput);
    }.on('didInsertElement'),

    actions: {
      save: function() {
        console.log('here we save page');
      },
      toggleCollapse: function() {
        console.log('collapse page');
        this.set('isCollapsed', !this.get('isCollapsed'));
      }
    }

  });
