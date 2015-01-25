import DS from 'ember-data';

var attr = DS.attr,
    belongsTo = DS.belongsTo,
    hasMany = DS.hasMany;

export default DS.Model.extend({
  story: belongsTo('story'),
  title: attr('string'),
  body: attr('string'),
  img: attr('string'),
  options: hasMany('option', { async: true, inverse: 'parentPage' })
});
