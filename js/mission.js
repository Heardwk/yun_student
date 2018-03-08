$(document).ready(function(){
	  $(".chooiceBtn_panel>ul>li").each(function(i,item){
	  	$(this).click(function(){
	  		$(this).addClass("active").siblings().removeClass("active");
	  	  $(".chooic>div").eq(i).css('display','block').siblings().css("display","none");
	  	});
	  })
})