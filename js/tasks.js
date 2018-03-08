/**
 * Created by Administrator on 2017/12/8 0008.
 */
$(function () {
    /*删除实训总结*/
    $(".summarize_list").on("click", ".remove_icon", function (e) {
        e.preventDefault();
        var $this = $(this);
        ShowTooltip({
            textContent: "确定删除当前实训总结？",
            sureFunction: function () {
                $this.parents("li").remove();
            }
        })
        // $(this).parents("li").remove()
    });

    $("#left_menu").resizable({containment: "parent"});

    $(document.body).on("click", ".remove_plan", function () {
        var $this = $(this);
        ShowTooltip({
            textContent: "确定删除当前实训计划？",
            sureFunction: function () {
                $this.parents("li").remove();
            }
        })
        // $(this).parents("li").remove()
    });

    /*弹出框内的文本域限制字数*/
    var totalNumber = 200;
    $(".shade_center .total").text(totalNumber);
    $(document.body).on("keyup", ".event_textarea", function (event) {

        /* Act on the event */
        var overplusNumber = totalNumber - $(this).val().length;
        $(this).attr("maxLength", totalNumber);
        $(this).siblings().find(".overplus").text(overplusNumber);
    });

    $("#add_btn_jiexi").on("click", function () {
        $("#tooltip_course").fadeIn(200).find("#jiexi_panel").removeClass("hide");
        $("#shangchuan_panel").addClass("hide");
        $("#tooltip_course").find(".event_textarea").focus()
    })

    $("#btn_sure_jiexi").on("click", function () {
        var text = $(this).parents(".shade_content").find(".event_textarea").val();
        var html ='<span>'+text + '</span><a style="margin-left: 20px;" class="btn_borderblue btn_noborder" href="javascript:;" id="change_btn">修改解析</a>'
        $("#tooltip_course").fadeOut(200);
        console.log(text.trim())
        if (text.length > 0 && text.trim() !="") {
            $("#jiexi_content").removeClass("show_btn");
            $("#jiexi_text").html(html);
        } else {
            $("#jiexi_content").addClass("show_btn");
            $("#jiexi_text").html("");
        }
    });

    /*修改解析按钮*/
    $(document.body).on("click","#change_btn",function () {
        $("#tooltip_course").fadeIn(200);
        var contentText=$(this).siblings().text();
        console.log(contentText);
        $(".event_textarea").val(contentText).focus();
    });

    /*上传资料按钮*/
    $("#btn_shangchuan").on("click",function () {
        $("#tooltip_course").fadeIn(200).find("#shangchuan_panel").removeClass("hide");
        $("#jiexi_panel").addClass("hide");
    })

    /*上传资料弹窗内的确认按钮*/
    var number=0;   //上传资料的条数
    $("#number_chuan").text(number);
    $("#btn_sure_shangchuan").on("click",function () {
        number++;
        $("#tooltip_course").fadeOut(200);
        $("#see_btn").removeClass("btn_none");
        $("#number_chuan").text(number);
    });
})
