import Ember from 'ember';

export default Ember.View.extend({
  template: "",
  didInsertElement: function () {
    var self = this;
    $(".rant-item").addClass('slide-in-left');
  },


});
