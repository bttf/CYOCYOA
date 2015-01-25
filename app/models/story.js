import DS from 'ember-data';

var attr = DS.attr,
    belongsTo = DS.belongsTo,
    hasMany = DS.hasMany;

export default DS.Model.extend({
  user: belongsTo('user', { async: true, inverse: 'stories' }),
  title: attr('string'),
  pages: hasMany('page', { async: true, inverse: 'story' }),
  img: attr('string'),
  publish: belongsTo('publish', { async: true }),
  firstPage: function() {
    var pages = this.get('pages');
    return pages.objectAt(0);
  }.property('pages')
});
