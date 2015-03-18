import Ember from "ember";

export default Ember.ArrayController.extend({
  sortProperties: ['data.created_at'],
  sortAscending: false,
});
