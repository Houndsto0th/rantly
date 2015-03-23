import Ember from "ember";

export default Ember.ObjectController.extend({

  isEditing: false,

  actions: {
    editRant: function () {
      this.set('isEditing', true);
    },

    updateRant: function (rant) {
      var title = this.get('title'),
          body = this.get('body'),
          self = this;
      this.store.find('user', this.get('session.user_id')).then(function(current) {
        if (body && body.length >= 144 && title) {
          rant.set('title', title);
          rant.set('body', body)
          rant.save().then(function () {
            self.set('isEditing', false);
          });
        }
      });
    },

    cancelEdit: function () {
      this.set('isEditing', false);
    },

    deleteRant: function (rant) {
      Ember.$('.button-danger').parents('article').addClass('fade-out');
      Ember.run.later(function () {
        rant.destroyRecord();
      }, 400);
    },
  }
});
