import Ember from "ember";

export default Ember.ObjectController.extend({

  actions: {
    goToRants: function () {
      var self = this;

      Ember.run.later(function () {
        self.transitionToRoute('rants');
      }, 400);
    },

    newRant: function () {
      var user = this.get('session.email'),
          user_id = this.get('session.user_id'),
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
          rant.save().then(function () {
            $('.rant-item').addClass('slide-out-right');

            Ember.run.later(function () {
              self.transitionToRoute('rants');
            }, 400);
          });
        }
      });
    },

  }

});
