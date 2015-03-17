import Ember from "ember";

export default Ember.ArrayController.extend({

  actions: {
    clearNote: function () {
      console.log(this);
    }
  }

});
