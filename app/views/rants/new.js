import Ember from 'ember';

export default Ember.View.extend({
  template: "",
  didInsertElement: function () {
    var self = this;
    $(".rant-item").addClass('slide-in-left');

    this.$().on('click', '.button-default', function (){
      $('.rant-item').addClass('slide-out-right').then(self.get('controller').send('goToRants'));
    });
  },



});
