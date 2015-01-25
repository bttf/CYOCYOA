import DS from 'ember-data';

var attr = DS.attr,
    belongsTo = DS.belongsTo,
    hasMany = DS.hasMany;

export default DS.Model.extend({
  user: belongsTo('user', { inverse: 'stories' }),
  title: attr('string'),
  firstPage: belongsTo('page'),
  pages: hasMany('page', { inverse: 'story' }),
  img: attr('string')
});
