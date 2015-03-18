import Ember from "ember";

export default Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    editRant: function () {
      this.set('isEditing', true);
    },

    saveRant: function () {
      var title = this.get('title'),
          body = this.get('body');

      if (body && title) {
        this.set('isEditing', false);
        this.save();
      }
    },
      cancelEdit: function () {
        this.set('isEditing', false);
      }

  }
});
