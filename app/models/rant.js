import DS from "ember-data";

export default DS.Model.extend({
  body: DS.attr('string'),
  title: DS.attr('string'),
  created_at: DS.attr('date'),
  user: DS.belongsTo('user', {async: true})
});
