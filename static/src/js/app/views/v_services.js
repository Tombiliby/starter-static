$(function(){

  app.ServicesView = Backbone.View.extend({
    el: $("#snc-benefit .services"),
    initialize: function() {
      this.template = _.template($("#tpl-servises-benefit").html());
    },
    render: function() {
      var renderedContent = this.template({
            services: this.collection.toJSON()
          });
      $(this.el).html(renderedContent);
      console.log(this.collection.toJSON());
      return this;
    }
  });
});
























