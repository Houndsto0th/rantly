import Ember from "ember";

export default Ember.ArrayController.extend({
  firstNameMissing: false,
  lastNameMissing: false,
  emailMissing: false,
  passwordMissing: false,

  actions: {

    signUp: function () {
      var firstName = this.get('firstName'),
          lastName = this.get('lastName'),
          email = this.get('email'),
          password = this.get('password'),
          self = this;

      if (!firstName) {
        self.set("firstNameMissing", true);
      }
      if (!lastName) {
        self.set("lastNameMissing", true);
      }
      if (!email) {
        self.set("emailMissing", true);
      }
      if (password && password.length <= 7) {
        self.set("passwordMissing", true);
      } else if (!password) {
        self.set("passwordMissing", true);
      }

      var user = this.store.createRecord('user',
                                          {first_name: firstName,
                                           last_name: lastName,
                                           email: email,
                                           password: password});

      self.set("firstNameMissing", false);
      self.set("lastNameMissing", false);
      self.set("emailMissing", false);
      self.set("passwordMissing", false);
      self.set('firstName', '');
      self.set('lastName', '');
      self.set('email', '');
      self.set('password', '');
      user.save().then(function () {
        self.transitionToRoute('rants.index');
        Ember.run.later(function () {
          Ember.$('.rant-item').addClass('slide-out-right');
        }, 300);
      }.bind(self));

    },


  }


});
