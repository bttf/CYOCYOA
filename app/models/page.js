import DS from 'ember-data';

var attr = DS.attr,
    belongsTo = DS.belongsTo;

export default DS.Model.extend({
  story: belongsTo('story'),
  title: attr('string'),
  body: attr('string'),
  img: attr('string')
});