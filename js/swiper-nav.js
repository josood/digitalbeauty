var topcarousel = new Swiper(".slideshow .topcarousel", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    /*autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },*/
    navigation: {
        nextEl: ".topcarousel-button-next",
        prevEl: ".topcarousel-button-prev",
    }
});
/* var topcarousel = new Swiper(".topcarousel", {});*/

var swiper = new Swiper(".fragrance .mySwiper", {
    //autoHeight: true,
    loop: true,
    spaceBetween: 0,
    navigation: {
        nextEl: ".fragrance-button-next",
        prevEl: ".fragrance-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        800: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 0,
        },
    },
});
var swiper = new Swiper(".skincare .mySwiper", {
    //autoHeight: true,
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".skincare-button-next",
        prevEl: ".skincare-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        800: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 0,
        },
    },
});

var swiper = new Swiper(".makeup .mySwiper", {
    //autoHeight: true,
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".makeup-button-next",
        prevEl: ".makeup-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        800: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 0,
        },
    },
});

var swiper = new Swiper(".suncare .mySwiper", {
    //autoHeight: true,
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".suncare-button-next",
        prevEl: ".suncare-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        800: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 0,
        },
    },
});

var swiper = new Swiper(".gwp .mySwiper", {
    //autoHeight: true,
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".gwp-button-next",
        prevEl: ".gwp-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});

var swiper = new Swiper(".gwp-carousel .mySwiper", {
    //autoHeight: true,
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".gwpcarousel-button-next",
        prevEl: ".gwpcarousel-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        375: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 0,
        },
        640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 0,
        },
    },
});

$(window).scroll(function () {
    var sticky = $('#Categorias'),
        curl = $('#curlybracket'),
        scroll = $(window).scrollTop();
    if (scroll >= 100) {
        sticky.addClass('stickey-nav');
        curl.addClass('stickey-nav');
    } else {
        sticky.removeClass('stickey-nav');
        curl.removeClass('stickey-nav');
    }
});

$('.icone').on('click', function () {
    $(this).toggleClass('active');
});

$(document).ready(function () {
    $(".icone").click(function () {
        $(".myCat").toggleClass("view");
        $(".myLinks").toggleClass("view");
    })
});


//stuff to prompt the user to swipe
//Shows the animation if your mouse is still for 15 seconds/hides it when you move
//Shows the animation if your mouse is still for 15 seconds/hides it when you move
let fadein = null;

const myFunction = (fadeOutTime, fadeInAfterTime) => {
    document.querySelector(".promptBox").style.transition = fadeOutTime + "ms";
    document.querySelector(".promptBox").style.opacity = "0";    
    document.querySelector(".promptBox2").style.transition = fadeOutTime + "ms";
    document.querySelector(".promptBox2").style.opacity = "0";
    document.querySelector(".promptBox3").style.transition = fadeOutTime + "ms";
    document.querySelector(".promptBox3").style.opacity = "0";
    document.querySelector(".promptBox4").style.transition = fadeOutTime + "ms";
    document.querySelector(".promptBox4").style.opacity = "0";
    if (fadein != null) {
        clearTimeout(fadein);
    }
    fadein = setTimeout(showMe, fadeInAfterTime);
};

const showMe = () => {
    document.querySelector(".promptBox").style.opacity = "1"; 
    document.querySelector(".promptBox2").style.opacity = "1";
    document.querySelector(".promptBox3").style.opacity = "1";
    document.querySelector(".promptBox4").style.opacity = "1";
};

document.querySelector("body").addEventListener("mousemove", function () {
    myFunction(300, 15000);
});

document.querySelector("body").addEventListener("mousedown", function () {
    myFunction(300, 15000);
});
document.querySelector("body").addEventListener("mouseup", function () {
    myFunction(300, 15000);
});

document.querySelector("body").addEventListener("click", function () {
    myFunction(300, 15000);
});
document.querySelector("body").addEventListener("touchstart", function () {
    myFunction(300, 15000);
});
document.querySelector("body").addEventListener("touchmove", function () {
    myFunction(300, 15000);
});
document.querySelector("body").addEventListener("touchend", function () {
    myFunction(300, 15000);
});


