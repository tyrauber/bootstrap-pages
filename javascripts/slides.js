
!function ($) {

  function setIndicator(){
    $('[data-anchor]').removeClass('active');
    var anchor = window.location.hash.replace('#','');
    if(anchor==''){ anchor = $('section').first().attr('id'); }
    $('[data-anchor='+anchor+']').addClass('active');
    $('body').attr('data-page', anchor);
  }

  function resizePage(){
    $("#wrap").height($(window).height()*$('section').length);
    $("section").css('height', ((100/$('section').length)+.001)+"%");
    setIndicator();
  }

  function navigateTo(anchor){
    var $anchor = $("#"+anchor);
    $('html, body').stop().animate({
      'scrollTop': $anchor.offset().top
    }, 900, 'swing', function () {
      window.location.hash = anchor;
      setIndicator();
    });
  }

  $('.page-control').on('click',function (e) {
    e.preventDefault();
    var index = $('ol.page-indicators li[data-anchor]').index($('ol.page-indicators li[data-anchor].active'));
    var offset = Number($(this).attr('data-page-to'));
    anchor = $('ol.page-indicators li[data-anchor]')[index+offset];
    if(anchor != undefined){
      navigateTo($(anchor).attr('data-anchor'));
    }
  });
  
  $('[data-anchor]').on('click',function (e) {
  	e.preventDefault();
	  var anchor = $(this).attr('data-anchor');
    navigateTo(anchor);
  });
  
  $(document).ready(function(){ resizePage(); });
  $(window).resize(function(){ resizePage(); });
 
}(window.jQuery)