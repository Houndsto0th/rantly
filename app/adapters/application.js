import DS from "ember-data";

export default DS.ActiveModelAdapter.extend({
  host: 'https://rantly-serverbk.herokuapp.com/',
  ajaxError: function(jqXHR) {
    var error = this._super(jqXHR);

    if (jqXHR && jqXHR.status === 422) {
      var jsonErrors = Ember.$.parseJSON(jqXHR.responseText);

      return new DS.InvalidError(jsonErrors);
    } else {
      return error;
    }
  }
});
