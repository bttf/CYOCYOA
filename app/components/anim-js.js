import Ember from 'ember';

var $ = Ember.$;

export default Ember.Component.extend({
  executeJs: function() {
    (function() {
      window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function(/* function */ callback, /* DOMElement */ element){
          window.setTimeout(callback, 1000 / 60);
        };
      })();

      function init() {
        var img = $('#cyoa-main-img');
        img.css({
          'width': '1',
          'height': '1'
        });

        img.removeClass('hidden');

        window.anim = {};
        window.anim['img-ready'] = true;
      }
      
      function loop(time) {
        requestAnimFrame(loop);
        if (window.anim['img-ready']) {
          introImg();
        }
      }

      function introImg() {
        var img = $('#cyoa-main-img');
        var imgRatio = 456 / 760;
        var width = img.height() * imgRatio,
            height = img.height();
        var spinSpeed = 4;
        var degrees = height * spinSpeed % 360;
        if (height > window.innerHeight - (window.innerHeight * .1)) {
          if (degrees > 340 || degrees < 10) {
            img.rotate(degrees);
            window.anim['img-ready'] = false;
            return;
          }
        }
        img.rotate(degrees);
        img.css({
          'height': height + 10,
          'width': (height * imgRatio)
        });
      }

      init();
      loop();
    })();
  }.on('didInsertElement')
});
