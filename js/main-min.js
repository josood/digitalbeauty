function on_resize() {
    $(".js-valign").each(function() {
        var t;
        $(this).css("padding-top", "");
        var i = $(this).height(), s = $(this).parent().height();
        $(this).hasClass("centre") ? (t = (s - i) / 2, $(this).css("padding-top", t + "px")) : $(this).hasClass("upper") ? (t = (s - i) / 3, 
        $(this).css("padding-top", t + "px")) : $(this).hasClass("lower") ? (t = (s - i) / 4 * 3, 
        $(this).css("padding-top", t + "px")) : $(this).hasClass("bottom") && ($(this).parents(".js-wrap").length && $(this).unwrap(), 
        $(this).wrap('<div class="js-wrap"></div>')), $(this).addClass("done");
    });
}

var reported_width, actual_width, prev_width, curr_media, prev_media, check_media, lower_phone_limit = 440, upper_phone_limit = 768, tablet_limit = 980, compact_limit = 1100;

$(document).ready(function() {
    $(".cover-image-video img[data-blzsrc]").each(function() {
        $(this).attr("src", $(this).attr("data-blzsrc")), $(this).removeAttr("data-blzsrc");
    }), on_resize(), $(window).resize(on_resize);
}), $(window).load(function() {
    on_resize();
});