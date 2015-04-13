$(function(){

	app.ServicesCollection = Backbone.Collection.extend({
	  model: app.Service,
	  initialize: function() {
	    console.log(this);
	  }
	});

});