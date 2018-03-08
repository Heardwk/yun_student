/**
 * Created by Administrator on 2017/12/5 0005.
 */
$(function () {
    $("#chooiceBtn li").on("click", function () {
        $("#chooiceBtn li").removeClass("active");
        $(this).addClass("active")
    })

    $(".chooice_box li").on("click", function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active")
    });

/*  列表内的删除按钮*/
    $(".task_list").on("click",'.remove_btn',function () {
        var $this=$(this);
        ShowTooltip({
            title:111,
            sureFunction:function () {
                $this.parents("li").remove();
            }
        })
    })

    /*发布实训按钮*/
    $("#btn_release").on("click",function () {
        $("#popup_release").fadeIn(200)
    })
    /*   弹窗内课程列表内的点击事件*/
    $(document.body).on("click",".lesson_list li",function () {
        $(this).siblings().removeClass("add_gou");
        $(this).addClass("add_gou");
    })
    $("#btn_book_sure").on("click",function () {
        $("#popup_release").fadeOut(200)
        //window.open("taskManagement.html")
    })
})