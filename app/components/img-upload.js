import Ember from 'ember';
import ENV from 'cyocyoa/config/environment';

var $ = Ember.$;

export default Ember.Component.extend({
  tagName: 'input',
  attributeBindings: ['type'],
  type: 'file',
  attachEvents: function() {
    var component = this;
    function handleFileInput(e) {
      console.log('handling');
      var file = e.target.files[0];
      if (!file.type.match('image.*')) return;
      console.log('post if');
      var reader = new FileReader();
      reader.onload = (function(f) {
        return function(e) {
          var size = f.size / 1024;
          if (size > 850) {
            console.log('debug: file size', size);
            $('.filesize-err').show();
            return;
          } else {
            $('.filesize-err').hide();
          }
          $.ajax({
            type: 'PATCH',
            url: 'https://' + ENV.APP.firebaseInstance + '.firebaseio.com/stories/' + component.get('story.id') + '/.json',
            data: '{ "img": "' + e.target.result + '" }',
            success: function() {
              console.log('success');
            },
            error: function(xhr, status, err) {
              console.log('error', err);
            }
          });
        };
      })(file);
      reader.readAsDataURL(file);
    }
    $('#file-input').change(handleFileInput);
    console.log('ok');
  }.on('didInsertElement')

});
