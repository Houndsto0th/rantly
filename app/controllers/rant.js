import Ember from "ember";

export default Ember.ObjectController.extend({

  isEditing: false,

  actions: {
    editRant: function () {
      this.set('isEditing', true);
    },

    saveRant: function () {
      var title = this.get('title'),
          body = this.get('body'),
          self = this;
      this.store.find('user', this.get('session.user_id')).then(function(current) {
        if (body && body.length >= 144 && title) {
          var rant = self.store.createRecord('rant',
                                            { body: body,
                                              title: title,
                                              user: current, });
          rant.save().then(function () {
            self.set('isEditing', false);
          });
        }
      });
    },

      cancelEdit: function () {
        this.set('isEditing', false);
      }

  }
});
