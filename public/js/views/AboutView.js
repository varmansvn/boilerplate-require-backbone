define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/AboutTemplate.html'
], function($, _, Backbone, AboutTemplate){
  var AboutView = Backbone.View.extend({
    el: $('.jumbotron'),
    render: function(){
      this.$el.html(AboutTemplate);
      $('ul#menu').find('li').each(function(){
        li = $(this);
        if(li.text() === 'About') {
          li.addClass('active');
        } else {
          li.removeClass('active');
        }
      });
    }
  });
  return AboutView;
});