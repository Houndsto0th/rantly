import Ember from "ember";

export default Ember.ObjectController.extend({
  rantShort: false,
  titleMissing: false,

  actions: {
    goToRants: function () {
      var self = this;

      Ember.run.later(function () {
        self.transitionToRoute('rants.index');
      }, 50);
    },

    newRant: function () {
      var user  = this.get('session.email'),
          body  = this.get('rantContent'),
          title = this.get('rantTitle'),
          self  = this;
      this.store.find('user', this.get('session.user_id')).then(function(current) {

        if (body && body.length <= 143) {
          self.set("rantShort", true);
        } else if (!body) {
          self.set("rantShort", true);
        }
        if (!title) {
          self.set("titleMissing", true);
        }

        if (body && body.length >= 144) {
          self.set("rantShort", false);
        }
        if (title) {
          self.set("titleMissing", false);
        }

        if (body && body.length >= 144 && title) {
          self.set("rantShort", false);
          self.set("titleMissing", false);
          var rant = self.store.createRecord('rant',
                                            { body: body,
                                              title: title,
                                              user: current, });
          self.set("title", '');
          self.set("body", '')
          rant.save().then(function () {
              Ember.$('.rant-item').addClass('slide-out-right');
            Ember.run.later(function () {
            self.transitionToRoute('rants.index');
            }, 100);
          }.bind(self));
        }
      });
    },


  }
});
