/**
 * Created by Administrator on 2017/12/6 0006.
 */
$(function () {
    $(document.body).scroll(function () {
        console.log($(document).scrollTop())
        if ($(document.body).scrollTop() >= 80) {
            $("#goTop").show();
        }
        else {
            $("#goTop").hide();
        }
    });
    $("#goTop").on("click", function () {
        $(document.body).animate({
            scrollTop: 0
        })
    })

    /*弹出的取消和×按钮*/

    $(document.body).on("click", ".btn_close", function () {
        $(".tooltip_panel").fadeOut(200);
    })
})

/**
 *   提示框
 * @param obj  obj类型为对象， 其属性有:
 * obj.title            弹窗的顶部的标题     默认为温馨提示
 * obj.textContent      中间内容文字         默认为确定删除当前任务
 * obj.addContarner     弹窗加在那个容器上   默认为body
 * obj.sureFunction     弹窗内确定按钮添加事件函数
 * @constructor
 */
function ShowTooltip(obj) {
    var title = "温馨提示"
    var textContent = "确定删除当前任务？ ";
    var addContainer = "body";
    var sureFunction = function () {
    }
    if (arguments.length > 0) {

        if (typeof obj == "object") {
            title = obj.title || title;
            textContent = obj.textContent || textContent;
            addContainer = obj.addContarner || addContainer;
            sureFunction = obj.sureFunction || sureFunction
        } else {
            console.log("参数类型错误")
        }
    }
    var tooltipHtml = '<div id="tooltip" class="tooltip_panel">' +
        '<div class="tooltip_content">' +
        '<h4><span>' + title + '</span> <a href="javascript:;" class="pull-right btn_cha btn_close">×</a></h4> ' +
        '<div class="message_content">' + textContent + '</div> ' +
        '<div class="btn_panel"> ' +
        '<a id="btn_sure" href="javascript:;" class="btn_backgroundblue pull-right btn_basic">确定</a> ' +
        '<a href="javascript:;" class="btn_borderblue pull-right btn_basic btn_close">取消</a> </div> </div> </div>';
    if ($(".tooltip_content").length > 0) {
        $("#tooltip").fadeIn(200);
        $("#tooltip").find("h4>span").text(title);
        $("#tooltip").find("message_content").text(textContent);
    } else {

        $(addContainer).append(tooltipHtml);
        $("#tooltip").fadeIn(200);
    }

    /*  $(addContainer).append(tooltipHtml);*/

    $(document.body).off("click","#btn_sure").on("click", "#btn_sure", function () {
        $(".tooltip_panel").fadeOut(200);
        sureFunction();
    })
}