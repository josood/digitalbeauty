

//  V A R I A B L E S


var reported_width;
var actual_width;
var prev_width;
var curr_media;
var prev_media;
var check_media;

// Make sure these correspond with CSS

var lower_phone_limit = 440;
var upper_phone_limit = 768;
var tablet_limit = 980;
var compact_limit = 1100;


//  F U N C T I O N S


function on_resize() {

    $('.js-valign').each(function() {

        var offset;
        $(this).css('padding-top', '');
        var this_height = $(this).height();
        var parent_height = $(this).parent().height();

        if ($(this).hasClass('centre')) {

            offset = (parent_height - this_height) / 2;
            $(this).css('padding-top', offset + 'px');

        } else if ($(this).hasClass('upper')) {

            offset = (parent_height - this_height) / 3;
            $(this).css('padding-top', offset + 'px');

        } else if ($(this).hasClass('lower')) {

            offset = ((parent_height - this_height) / 4) * 3;
            $(this).css('padding-top', offset + 'px');

        } else if ($(this).hasClass('bottom')) {

            if ($(this).parents('.js-wrap').length) {
                $(this).unwrap();
            }
            $(this).wrap('<div class="js-wrap"></div>');

        }

        $(this).addClass('done');

    });

}

$(document).ready(function() {

    //
    $('.cover-image-video img[data-blzsrc]').each(function() {
       $(this).attr('src', $(this).attr('data-blzsrc'));
        $(this).removeAttr('data-blzsrc');
    });

    // Resizing
    on_resize();
    $(window).resize(on_resize);

});

$(window).load(function() {

    on_resize();

});
