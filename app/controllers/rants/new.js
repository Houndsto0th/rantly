import Ember from "ember";

export default Ember.ArrayController.extend({


  actions: {
    goToRants: function () {
      var self = this;

      Ember.run.later(function () {
        self.transitionToRoute('rants');
      }, 400);
    },
  }

});
