import DS from 'ember-data';

var attr = DS.attr,
    hasMany = DS.hasMany;

export default DS.Model.extend({
  uid: attr('string'),
  stories: hasMany('story', { async: true, inverse: 'user' })
});
