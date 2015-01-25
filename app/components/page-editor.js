import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['page-editor'],
  classNameBindings: ['isCollapsed'],
  isCollapsed: false,

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
