import Ember from 'ember';

export default Ember.Component.extend({
  isOwner: function() {
    return this.get('param1').toString() === this.get('param2').toString();
  }.property('param1', 'param2')

});
