import Ember from 'ember';

export default Ember.Component.extend({
  isOwner: function() {
    return this.get('rantuid') === this.get('sessionuid');
  }.property('rantuid', 'sessionuid')
});
