import Ember from 'ember';

export default Ember.Component.extend({
  isOwner: function() {
    console.log(this.get('rantuid') + " rant user id");
    console.log(this.get('sessionuid') + " session user id");
    return this.get('rantuid').toString() === this.get('sessionuid').toString();
  }.property('rantuid', 'sessionuid')
});
