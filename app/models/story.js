import DS from 'ember-data';

var attr = DS.attr,
    belongsTo = DS.belongsTo,
    hasMany = DS.hasMany;

export default DS.Model.extend({
  user: belongsTo('user', { async: true, inverse: 'stories' }),
  title: attr('string'),
  firstPage: belongsTo('page'),
  pages: hasMany('page', { async: true, inverse: 'story' }),
  img: attr('string')
});
