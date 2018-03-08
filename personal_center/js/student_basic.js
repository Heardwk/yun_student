$(document).ready(function(){
$(".chooice_content>ul>li").each(function(){
	$(this).click(function(){
		$(this).addClass("active_li").siblings().removeClass("active_li")
//		$(".chooice_content>ul>li>p").addClass("article_p")
	})
  	$(".gg").on("click",function(){
  		$(".psd").css("display","block");
  	})
  	$(".x_btn>a").click(function(){
  		$(".next").css("display","block");
  		$(".psd").css("display","none");
  		$(".alter").css("display","none");
  	})
  	$(".xg").click(function(){
  		$(".alter").css("display","block");
  		$(".next").css("display","none");
  		$(".psd").css("display","none");
  	})
  	$(".pass_tit>a ").click(function(){
  		$(".alter").css("display","none");
  		$(".next").css("display","none");
  		$(".psd").css("display","none");
  	})
  })
});