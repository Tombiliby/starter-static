$(function(){

  app.Service = Backbone.Model.extend({
    defaults: {
      title: "titre de la prestation",
      price: "76",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin tellus non augue tincidunt, in consequat metus venenatis. Etiam consequat elit commodo, semper mauris tempor, placerat ante. Vestibulum pellentesque, ipsum ac molestie ornare, quam neque tincidunt purus, tincidunt rhoncus libero nunc facilisis tellus.",
    },
    initialize: function() {
      console.log("Création d'une nouvelle presta");
    }
  });

});