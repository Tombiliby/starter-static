$(function() {

    app.servicesCollection = new app.ServicesCollection();

    app.servicesCollection.add(new app.Service({
      title: "Titre 1 de la prestation",
      price: "98",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin tellus non augue tincidunt, in consequat metus venenatis. Etiam consequat elit commodo, semper mauris tempor, placerat ante. Vestibulum pellentesque, ipsum ac molestie ornare, quam neque tincidunt purus, tincidunt rhoncus libero nunc facilisis tellus.",
    }));
    app.servicesCollection.add(new app.Service({
      title: "Titre 2 de la prestation",
      price: "116",
      desc: "Nullam velit libero, viverra at auctor non, pellentesque a lacus. Integer eget laoreet erat, aliquam sollicitudin quam. Mauris venenatis a lorem eget varius. Donec leo orci, bibendum ac sollicitudin nec, tempus rutrum nisl.",
    }));
    app.servicesCollection.add(new app.Service({
      title: "Le titre 3 de la prestation",
      price: "116",
      desc: "Praesent aliquet risus iaculis, varius orci vitae, vulputate lorem. Aenean egestas porttitor urna sit amet auctor. Cras pretium tortor vel placerat suscipit. Nullam ac mi tincidunt, pulvinar tellus et, tempor nisi. Etiam a nisi sit amet nisl eleifend euismod.",
    }));

    app.servicesView = new app.ServicesView({ collection : app.servicesCollection });
    app.servicesView.render();

});