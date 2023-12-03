window.setTimeout(function() {
    $(".loading").fadeOut(500)
}, 400)

$(document).ready(function() {
    $(window).load(function() {
        $(".mobile-inner-header-icon").click(function() {
            $(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
            $(".mobile-inner-nav").slideToggle(250);
        });
        $(".mobile-inner-nav li").each(function(index) {
            $(this).css({
                'animation-delay': (index / 10) + 's'
            });
        });
        $(".mobile-inner-nav li").click(function() {
            $(this).find('dl').slideToggle(200)
        })
    });

})

$(document).ready(function() {

    $(".section_8 img").each(function(index) {
        $(this).css({
            'animation-delay': (index / 10) + 's'
        });
    });




    $('.index>*>*>*').addClass('wow fadeInUp')



    $('.section4 .content2 .line i').addClass('wow width1')



    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    });
    wow.init();




    function height() {
        var sc = $(window).scrollTop();
        if (sc > 200) {
            $("body").addClass("current");
        } else {
            $("body").removeClass("current");
        }
    }
    height()
    $(window).scroll(function() {
        height()
    });




    function alertShow(text) {
        $('.alertmodel1').fadeIn(200)
        $('.alertmodel1').find('.tit').text(text)
    }

    $('.alertmodel1').on('click', '.return', function() {
        $(this).parents('.alertmodel1').fadeOut(200)
    })

    $('.connect').click(function() {
        alertShow('Coming soon')
    })


});