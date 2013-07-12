define([
  'jquery',
  'underscore',
  'backbone',
  'views/PersonView',
  'text!templates/HomeTemplate.html'
], function($,_, Backbone, PersonView, 
            HomeTemplate) {
  var HomeView = Backbone.View.extend({
    el: $('.jumbotron'),
    render: function(){
      this.$el.html(HomeTemplate);
      $('ul#menu').find('li').each(function(){
        li = $(this);
        if(li.text() === 'Home') {
          li.addClass('active');
        } else {
          li.removeClass('active');
        }
      });
    },
  });

  return HomeView;
});
