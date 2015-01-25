import DS from 'ember-data';

var attr = DS.attr,
    belongsTo = DS.belongsTo;

export default DS.Model.extend({
  user: belongsTo('user', { inverse: 'stories' }),
  title: attr('string'),
  firstPage: belongsTo('page'),
  img: attr()
});
