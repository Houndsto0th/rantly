import Ember from "ember";

export default Ember.ArrayController.extend({
    isEditable: function () {
      return this.get(rant.id) == session.user_id;

    }

});
