import DS from 'ember-data';

var attr = DS.attr,
    belongsTo = DS.belongsTo;

export default DS.Model.extend({
  parentPage: belongsTo('page', { async: true, inverse: 'options'}),
  lead: attr('string'),
  goTo: attr('string')
  //goTo: belongsTo('page', { async: true })
});
