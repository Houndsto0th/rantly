import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.ArrayController.extend(LoginControllerMixin, {
  authenticator: 'simple-auth-authenticator:devise',


  actions: {
    query: function() {
      var input = this.get('search');
      this.transitionToRoute('rants.search', {queryParams: {query: input}});
    }
  }
});
