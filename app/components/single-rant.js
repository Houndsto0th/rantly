import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'article',
  classNames: ['rant'],

  actions: {
    deleteRant: function(rant) {
      this.sendAction('deleteRant', rant);
    },

    editRant: function() {
      this.sendAction('editRant');
    },

    cancelEdit: function () {
      this.sendAction('cancelEdit');
    },

    updateRant: function (rant) {
      this.sendAction('updateRant', rant);
    }
  }
});
