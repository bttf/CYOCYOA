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
            component.set('fileSizeError', true);
            return;
          } else {
            component.set('fileSizeError', false);
          }
        };
      })(file);
      reader.readAsDataURL(file);
    }
    $('#' + component.get('imgInputId')).change(handleFileInput);
    }.on('didInsertElement'),

    actions: {
      save: function() {
        console.log('here we save page');
        this.sendAction('save', this.get('page'));
      },
      toggleCollapse: function() {
        this.set('isCollapsed', !this.get('isCollapsed'));
      },
      delete: function() {
        this.sendAction('delete', this.get('page'));
      }
    }

  });
