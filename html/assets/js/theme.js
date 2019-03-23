jQuery(document).ready(function($) {

  "use strict";

  var menuPrincipal = $('#menu-principal-d');
  $('#menu-principal-d .item.pai').hover(function(){
    menuPrincipal.css('width','352px');
    console.log('hover!');
  }, function(){
    menuPrincipal.css('width','176px');
    console.log('saiu hover!');
  });

});