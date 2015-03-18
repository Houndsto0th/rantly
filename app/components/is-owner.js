import Ember from 'ember';

export default Ember.Component.extend({
  isOwner: function() {
    return this.get('rantuid').toString() === this.get('sessionuid').toString();
  }.property('rantuid', 'sessionuid')
});
