jQuery(document).ready(function($) {

  "use strict";

  var menuPrincipal       = $('.menu-principal-desktop');
  $('.menu-principal-desktop .item.pai').hover(function(){
    menuPrincipal.css('width','352px');
  }, function(){
    menuPrincipal.css('width','176px');
  });
  
  var btnMenuPrincipal    = $('#btn-menu-principal');
  btnMenuPrincipal.on('click',function(){
    $('.menu-principal-mobile').toggleClass('show');
    $('.sombra-menu-mobile').toggleClass('show');
  });
  $("body").on("click", function (e) {
    if ($(e.target).closest("#btn-menu-principal,.menu-principal-mobile").length) return;
    $('.menu-principal-mobile').removeClass('show');
    $('.menu-principal-mobile').removeClass('move');
    $('.sombra-menu-mobile').removeClass('show');
    $(".menu-submenu").removeClass('show');
  });

  var menuItemPai       = $('.menu-item.is-father .menu-item-link');
  var btnVoltarMenu     = $('.menu-submenu .menu-btn-back');
  menuItemPai.on('click',function(){
    $(this).parents('.menu-principal-mobile').toggleClass('move');
    $(this).siblings(".menu-submenu").addClass('show');
  });
  btnVoltarMenu.on('click',function(){
    $(this).parents('.menu-principal-mobile').toggleClass('move');
    $(".menu-submenu").removeClass('show');
  });

  // if (screen.width < 640 || screen.height < 480) {
  // } else {
  // }

});