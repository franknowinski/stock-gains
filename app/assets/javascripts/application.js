//= require jquery
//= require angular
//= require angular-ui-router
//= require angular-rails-templates
//= require angular-devise
//= require angular-resource
//= require materialize-sprockets
//= require_tree .

$(document).ready(function(){
  $(".button-collapse").sideNav();
  $('.collapsible').collapsible({accordion : false });
});
