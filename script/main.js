$(function(){
  mainNav();
});

function mainNav(){
  //메인 내베게이션 항목 마우스 닿으면 서브메뉴를 모두/하나만 펼침
  $("#gnb > li").mouseenter(function(){
      $(this).children("a").addClass("on");
      $(this).children(".lnb").slideDown()
      // $(".lnb").stop().slideDown()
  });
  $("#gnb > li").mouseleave(function(){
      $(this).children("a").removeClass("on");
      $(this).children(".lnb").slideUp()
      // $(".lnb").stop().slideUp()
  });
  $(".lnb > li").mouseenter(function(){
      $(this).children("a").addClass("sub")
  })
  $(".lnb > li").mouseleave(function(){
      $(this).children("a").removeClass("sub")
  })
}


$(document).ready(function(){
    $('.slider').bxSlider({
      auto:true,
      pager: false,
      controls: true,
      autoControls: false,
      minSlides: 4,
      maxSlides: 4,
      moveSlides: 1,
      slideWidth: 285,
      slideMargin: 20,
      speed:100,
      autoHover:true,
      prevText:"",
      nextText:""
    });
  });
