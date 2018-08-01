$(document).ready(function () {

    /*! Fades in page on load */
    $('.main-header').css('display', 'none');
    $('.main-header').fadeIn(1500);

});

//Popup window

$(function () {
    $(".lunch-window").click(function (e) {
        e.preventDefault();

        $("body").css("overflow", "hidden");

        var idWindow = $(this).attr("data-windowId");
        $(idWindow).fadeIn("fast");

        //Window close
        $(idWindow).find(".window-close").click(function () {
            $(idWindow).fadeOut("fast", function () {
                $("body").css("overflow", "auto");
            });
        });
    });
});