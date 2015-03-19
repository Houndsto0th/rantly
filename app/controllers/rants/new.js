import Ember from "ember";

export default Ember.ObjectController.extend({

  actions: {
    goToRants: function () {
      var self = this;

      Ember.run.later(function () {
        self.transitionToRoute('rants.index');
      }, 50);
    },

    newRant: function () {
      var user = this.get('session.email'),
          body = this.get('rantContent'),
          title = this.get('rantTitle'),
          self = this;

      this.store.findQuery('user', {email: user}).then(function(person) {
        var current = person.get('firstObject')
        if (body && body.length >= 144 && title) {
          var rant = self.store.createRecord('rant',
                                            { body: body,
                                              title: title,
                                              user: current, });
          self.set("title", '');
          self.set("body", '')
          rant.save().then(function () {
            self.transitionToRoute('rants.index');
            Ember.run.later(function () {
              Ember.$('.rant-item').addClass('slide-out-right');
            }, 250);
          }.bind(self));
        }
      });
    },

  }

});
