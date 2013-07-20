define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/ContactTemplate.html'
], function($, _, Backbone, ContactTemplate){
  var ContactView = Backbone.View.extend({
    el: $('.jumbotron'),
    render: function(){
      this.$el.html(ContactTemplate);
      $('ul#menu').find('li').each(function(){
        li = $(this);
        if(li.text() === 'Contact') {
          li.addClass('active');
        } else {
          li.removeClass('active');
        }
      });
    }
  });
  return ContactView;
});