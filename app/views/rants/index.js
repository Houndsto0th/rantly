import Ember from 'ember';

export default Ember.View.extend({
  template: "",
  didInsertElement: function () {
    $(".rant-item").addClass('slide-in-left');

  this.$().on('click', '.button-invert', function (){
    $('.rant-item').addClass('slide-out-right');
    });
  },

});
