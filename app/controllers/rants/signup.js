import Ember from "ember";

export default Ember.ArrayController.extend({
  

  actions: {

    signUp: function () {
      var firstName = this.get('firstName'),
          lastName = this.get('lastName'),
          email = this.get('email'),
          password = this.get('password'),
          self = this;

      var user = this.store.createRecord('user',
                                          {first_name: firstName,
                                           last_name: lastName,
                                           email: email,
                                           password: password});
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
