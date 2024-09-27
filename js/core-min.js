var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function vertically_align(){$(".js-valign").each(function(){var t;$(this).css("padding-top","");var i=$(this).height(),e=$(this).parent().height();$(this).hasClass("centre")?(t=(e-i)/2,$(this).css("padding-top",t+"px")):$(this).hasClass("upper")?(t=(e-i)/3,$(this).css("padding-top",t+"px")):$(this).hasClass("lower")?(t=(e-i)/4*3,$(this).css("padding-top",t+"px")):$(this).hasClass("bottom")&&($(this).parents(".js-wrap").length&&$(this).unwrap(),$(this).wrap('<div class="js-wrap"></div>')),$(this).addClass("done")})}function clear_heights(t){t.children().each(function(){$(this).css("height",""),$(this).find(".js-valign-centre").css("padding-top","")})}function match_row_height(t,i){var e,h=0;t.each(function(){void 0===i?($(this).find(".js-transition").css("margin-top","0"),e=$(this).height(),$(this).find(".js-transition").css("margin-top","")):e=$(this).children(child_types).eq(i).height(),e>h&&(h=e)}),t.each(function(){h>0&&(void 0===i?$(this).height(h):$(this).children(child_types).eq(i).height(h))})}function match_heights(){$(".js-match-heights").each(function(){var t=$(this).data("jsmh-parent");t="this"===t?$(this):$(this).find(t);var i=$(this).data("jsmh-cols"),e=$(this).data("jsmh-min-cols");clear_heights(t);var h;if((h=actual_width<upper_phone_limit?e:i)>1)if(1===t.length)for(var a=t.children(child_types),s=0;s<a.length;s+=h)match_row_height(a.slice(s,s+h));else t.first().children(child_types).each(function(i){for(var e=0;e<t.length;e+=h)match_row_height(t.slice(e,e+h),i)})})}function crop_images(){$(".js-crop-image").each(function(){var t=$(this),i=$(this).children("img").first();i.removeAttr("style"),t.innerHeight()>i.height()?(i.css("height","100%"),i.css("width","auto")):(i.css("height","auto"),i.css("width","100%"));var e=(t.innerHeight()-i.height())/2;i.css("top",e+"px");var h=(t.width()-i.width())/2;i.css("left",h+"px")})}function ul_inline(){var t;$("ul.js-inline").each(function(){$(this).find("li").each(function(){$(this).removeClass("js-bullet")}),$(this).find("br").each(function(){$(this).remove()})}),$("ul.js-inline li").each(function(){$(this).offset().top===t&&($(this).addClass("js-bullet"),$(this).offset().top!==t&&($(this).removeClass("js-bullet"),$(this).before("<br>"))),t=$(this).offset().top})}function on_resize(){var t,i;reported_width=$(window).width(),$("body").css("overflow","hidden"),t=$(window).width(),$("body").css("overflow","visible"),i=window.navigator.userAgent.match(/Safari/i)&&!window.navigator.userAgent.match(/Chrome/i)?0:t-reported_width,prev_width=actual_width,(actual_width=reported_width+i)<lower_phone_limit?check_media="lower-phone":actual_width>=lower_phone_limit&&actual_width<upper_phone_limit?check_media="upper-phone":actual_width>=upper_phone_limit&&actual_width<tablet_limit?check_media="tablet":actual_width>=tablet_limit&&actual_width<compact_limit?check_media="compact":actual_width>=compact_limit&&(check_media="standard"),check_media!==curr_media&&(prev_media=curr_media,curr_media=check_media),ul_inline(),match_heights(),crop_images(),vertically_align(),$("#dev-box").text(curr_media+" "+actual_width)}var reported_width,actual_width,prev_width,curr_media,prev_media,check_media,lower_phone_limit=440,upper_phone_limit=768,tablet_limit=980,compact_limit=1100,child_types="img, div, a, p, h4, h3, h2, h1, h5, ul, ol, blockquote";$(document).ready(function(){$("[data-blzsrc]").each(function(){$(this).attr("src",$(this).attr("data-blzsrc")),$(this).removeAttr("data-blzsrc")}),$(".splash-mode").length&&$("html").addClass("splash-mode"),on_resize(),$(window).resize(on_resize),$(".cover-image-video img, .js-match-heights img").one("load",function(){on_resize()}).each(function(){(this.complete||$(this).width()>0)&&$(this).load()}),$('.fpk a:not(a[href^="#"])').each(function(){$(this).on("click",function(){if(window.location.hash){var t=window.location.href.split("#")[0];$("#dev-box").text(t),window.history.replaceState("",document.title,t)}})}),$("ul.js-inline").each(function(){var t=$(this).html();$(this).html(t.replace(/(<\/li>)\s*/g,"$1"))}),$(".js-expandable").each(function(){var t=$(this),i=t.data("jse-visible");$(this).height(i);var e=!1,h=$(this).next(".js-expander").find("a");h.text($(this).data("jse-show-text")),h.on("click",function(a){if(a.preventDefault(),e||(e=!0,dataLayer.push({event:"GAEvent",eventCategory:"Expandable",eventAction:"Opened",eventLabel:t.attr("id"),eventValue:void 0})),h.hasClass("open"))t.find(".fader").fadeIn(),t.animate({height:i},800,function(){h.removeClass("open"),h.text(t.data("jse-show-text"))});else{h.addClass("open"),t.css("height","");var s=t.height();t.css("height",i+"px"),t.find(".fader").fadeOut(),t.animate({height:s},800,function(){h.text(t.data("jse-hide-text"))}),$("html,body").animate({scrollTop:t.offset().top-60},800)}})}),$('a[href^="#"]:not([href="#"])').on("click",function(t){t.preventDefault(),$("html,body").animate({scrollTop:$(this.hash).offset().top-100},2500)}),location.hash&&setTimeout(function(){window.scrollTo(0,0)},1)}),$(window).load(function(){on_resize(),location.hash&&setTimeout(function(){$("html,body").animate({scrollTop:$(location.hash).offset().top-100},2e3)},0)});

}
/*
     FILE ARCHIVED ON 01:13:52 Dec 29, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:21:31 Sep 25, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.73
  exclusion.robots: 0.035
  exclusion.robots.policy: 0.02
  esindex: 0.012
  cdx.remote: 10.854
  LoadShardBlock: 39.598 (3)
  PetaboxLoader3.datanode: 62.106 (5)
  load_resource: 180.038 (2)
  PetaboxLoader3.resolve: 54.452 (2)
*/