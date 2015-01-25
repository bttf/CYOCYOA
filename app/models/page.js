import DS from 'ember-data';

var attr = DS.attr,
    belongsTo = DS.belongsTo;

export default DS.Model.extend({
  story: belongsTo('story'),
  nameId: attr('string'),
  body: attr('string'),
  img: attr('string'),
  options: attr({ defaultValue: [] })
});
