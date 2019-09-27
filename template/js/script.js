/*resize*/
var meta_viewport = $('meta[name="viewport"]');
function test_viewport() {
    var res = true;
    if (window.screen.availWidth > 360) {
        meta_viewport.attr('content', 'width=device-width, initial-scale=1, maximum-scale=1');
        res = true;
    } else {
        meta_viewport.attr('content', 'width=360, user-scalable=no, minimal-ui');
        res = false;
    }
    return res;
}
function change_viewport() {
    test_viewport();
    $(window).on('resize', function () {
        test_viewport();
    });
};

$(document).ready(function (){
    change_viewport();
    $(window).trigger('resize');

    $('.js-companies-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: "unslick"
            }
        ]
    });


    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $(".boxscroll").getNiceScroll().resize();
        $($( e.relatedTarget).attr('href')).find('.js-companies-slider').addClass('just');
        if (!$($(e.target).attr('href')).find('.slick-slider').hasClass('just')) {
            console.info(1);
            $($(e.target).attr('href')).find('.slick-slider').addClass('just').slick('refresh');
        };
    });

    $('.js-favorites').on('click', function(){
        $('.favorites__list').toggleClass('active').parent().toggleClass('show');
    });

    $(".boxscroll").niceScroll({ autohidemode:'false'});

    $('.navbar-toggler').on('click', function(){
        $(this).toggleClass('active');
        $('.navbar-collapse').toggleClass('active');

        if ( $(".navbar-collapse").hasClass("active") ) {
            $('body').addClass('overfl');
        }else{
            $('body').removeClass('overfl');
        }
    });

    $(".js-show").click(function() {
        $(this).toggleClass('d-none').prevAll('.disclosure').toggle();
    });

    $(".js-all").click(function() {
        $(this).toggleClass('d-none').nextAll('.disclosure').toggle();
    });

    /*$(".filter__item-list-category .close").click(function() {
        $(".filter__item-list-category").removeClass('active');
        $(this).parent().toggleClass('active');
    });*/


    $(".js-more").click(function() {
        $(this).toggleClass('d-none').prevAll('.disclosure').addClass('d-flex');
    });


    $(".js-filter-title").click(function() {
        $(this).parent().toggleClass('open');
    });

    $('[data-fancybox="job"]').on('click', function(e) {
        e.preventDefault();

        var indexOfItems = $(this).data('index');
        $.fancybox.open( $('.jobs__vacancies'), {
            index  : indexOfItems - 1,
            touch: true,
            afterShow : function( instance, slide ) {

            }

        });

        $(".boxscroll").getNiceScroll().resize();
    });

    $(".filter__item-inner .js-click-dropdown").click(function() {
        $(this).toggleClass('open').next().toggleClass('open');
    });

    $(".header__btn-search").click(function() {
        $(this).toggleClass('active')
        $('.menu_mob').toggleClass('open-menu');
        $('body').toggleClass('overfl');
    });

    $('[data-fancybox]').fancybox();

    $('.js-control').on('click', function(){
        $(this).toggleClass('active').parent().toggleClass('open');
    });

    $(".js-btn-view").on('click', function(){
        $(this).toggleClass('open');
        $('.catalog__vacancy-item').find('.js-quick').toggleClass('open');
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });


    $( window ).resize(function() {
        if($(window).width() < 991) {
            $(".map-main__list.boxscroll").niceScroll({ orizrailenabled:'false'});
        }
    })

    if($(window).width() < 991) {
        $(".map-main__list.boxscroll").niceScroll({ orizrailenabled:'false'});
    }
});
