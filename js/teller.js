$(document).ready(function(){
	$(".chooice_content>ul>li").each(function(i,item){
		$(this).click(function(){
			$(this).addClass("active_li").siblings().removeClass("active_li");
			$(".accounting_content>div").eq(i).css("display","block").siblings().css("display","none")
		})
		
	})
	$(".management_bot>ul>li").each(function(i,item){
		$(this).on("mouseenter",function(){
          $(this).find(".reset").slideDown()
	  })
		$(this).on("mouseleave",function(){
             $(this).find(".reset").slideUp();
	   })
	})
	$(".duties>i").on("click",function(){
		$(this).prev().slideToggle()
	})
//	$(".duties").on("click",function(){
//	   $(this).find(".ensconce").slideToggle()
//	})
//	$(".duties").on("click",function(){
//	   $(this).find(".ensconce").slideToggle()
//	})
})