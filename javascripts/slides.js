
!function ($) {

  function setIndicator(anchor){
    if(anchor==undefined){ anchor = $('section').first() }
    $('[data-anchor]').removeClass('active');
    var id = $(anchor).attr('id');
    $('[data-anchor='+id+']').addClass('active');
    $('body').attr('data-page', id);
  }

  function resizePage(){
    original = $(document).height();
    $("#wrap").height($(window).height()*$('section').length);
    $("section").css('height', ((100/$('section').length))+"%");
    console.log($("section").height())
    console.log($("#wrap").height())
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