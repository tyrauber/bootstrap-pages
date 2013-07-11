
!function ($) {

  function setIndicator(anchor){
    $('[data-anchor]').removeClass('active');
    var id = $('ul.nav li.active a').attr('data-anchor');
    $('[data-anchor='+id+']').addClass('active');
    $('body').attr('data-page', id);
  }

  function resizePage(){
    original = $(document).height();
    $("#wrap").height($(window).height()*$('section').length);
    $("section").css('height', (100/$('section').length)+.001+"%");
    setIndicator();
  }

  function navigateTo(anchor){
    var $anchor = $("#"+anchor);
    $('html, body').stop().animate({
      'scrollTop': $anchor.offset().top
    }, 900, 'swing', function () {
      setIndicator($anchor);
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