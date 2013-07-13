// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/HomeView',
  'views/ContactView',
  'views/AboutView'
], function($, _, Backbone, HomeView, ContactView, AboutView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      'contact'  : 'showContact',
      'about'    : 'showAbout',
      '*action' : 'defaultAction'
    }
  });
  
  var initialize = function(){

    var appRouter = new AppRouter;
    
    appRouter.on('route:showContact', function () {
        var contactView = new ContactView();
        contactView.render();
    });

    appRouter.on('route:showAbout', function () {
        var aboutView = new AboutView();
        aboutView.render();
    });

    appRouter.on('route:defaultAction', function (action) {
        var homeView = new HomeView();
        homeView.render();
    });

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
