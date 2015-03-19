import Ember from 'ember';

export default Ember.View.extend({
  template: "",
  didInsertElement: function () {
    $('.collapsible').collapsible({
      accordion : false
    });
    $(".button-collapse").sideNav();
    $(".rant-item").addClass('slide-in-left');
  }

});
