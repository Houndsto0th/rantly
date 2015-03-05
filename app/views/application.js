import Ember from 'ember';

export default Ember.View.extend({
  template: "",
  didInsertElement: function () {
    $('.collapsible').collapsible({
      accordion : false
    });
    $(".button-collapse").sideNav();
  }

});
