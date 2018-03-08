$(document).ready(function(){

  $(".content_l").click(function(){
    $(".co_r").addClass("active_l").siblings().removeClass("active_l");
  });
    $(".content_r").click(function(){
    $(".co_l").addClass("active_l").siblings().removeClass("active_l");
  	 
  });
  $(".content_left_tit ul>li.le").addClass("disabled")
  $(".content_left_tit ul>li.re").click(function(){
  	   $("#co2").css("left","-100%")
  	   $(this).removeClass("active_color").siblings().addClass("active_color");
       $(this).siblings().removeClass("disabled")
  	   
  });
  $(".content_left_tit ul>li.le").click(function(){
  	   $("#co2").css("left","0%")
  	   $(this).removeClass("active_color").siblings().addClass("active_color")
  })
});