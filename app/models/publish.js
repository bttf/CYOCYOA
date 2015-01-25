import DS from 'ember-data';

var belongsTo = DS.belongsTo;

export default DS.Model.extend({
  story: belongsTo('story', { async: true })
});
