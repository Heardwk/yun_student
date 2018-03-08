$(document).ready(function(){
	  $(".student_order ul>li").each(function(i,item){
	  	$(this).click(function(){
	  		$(this).addClass("active").siblings().removeClass("active");
	  	  $(".content .list").eq(i).css('display','block').siblings().css("display","none");
	  	    $(".explain-content").css("height","225px");
          $(".Practical_results").css("height","225px")
          $('.zoom_btn').html("展开<i></i>");
	  	});
	  })
    $(document.body).on("click",".zoom_btn",function(){
        var html=$(this).html();
        if(html=="收起<i></i>"){
            $(this).html("展开<i></i>");
            $(".explain-content").css("height","225px");
            $(".Practical_results").css("height","225px")
        }
        else{
            $(this).html("收起<i></i>");
            $(".explain-content").css("height","auto");
            $(".Practical_results").css("height","auto")
        }
    });
    

})