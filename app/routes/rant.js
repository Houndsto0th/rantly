import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return this.store.fetch('rant').then(function (rant) {
      return rant.reload();
    });
  },
});
