import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: "rant",
  queryParams: ['query'],
  query: null

});
