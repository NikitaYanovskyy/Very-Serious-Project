$(document).ready(()=>{
    //////////////////////////////////////////Language button
    var LabguagesBTNCheck = false;
    $('.languages').click(()=>{
        if(LabguagesBTNCheck == false){
            $('.language-pop-up').css({'display': 'block'});
            LabguagesBTNCheck = true;
        }else{
            $('.language-pop-up').css({'display': 'none'});
            LabguagesBTNCheck = false;
        }
    })
    //////////////////////////////////////////Purchase btn
    $('.purchase-button').mouseover(()=>{
        $('.purchase-pop-up').css({
            'opacity': '1',
            'visibility': 'visible'
        })
    })
    $('.purchase-button').mouseout(()=>{
        $('.purchase-pop-up').css({
            'opacity': '0',
            'visibility': 'hidden'
        })
    })
    //////////////////////////////////////////Menu button logic
    var menuBTNCheck = false;
    $('.burger-btn').click(()=>{
        if(menuBTNCheck == false){
            $('.mobile-menu-wrapper').css({
                'transition': 'background-color, 0.2s ease-in-out',
                'min-height': '100vh',
                'background-color': '#273444'
            })
//Display none
            $('body').css({
                'overflow': 'hidden'
            })

            $('.absolute-icons').css({
            'visibility': 'hidden',
            'opacity': '0'
            })
            $('.landing-particles').css({
                'display': 'none'
            })
            $('.menu').delay(100).queue(function(next){
                $(this).css({
                'margin-left': '0',
                'opacity': '1'
                });
                next();
            })
            $('.menu').css('display', 'flex');

//Body stuff
            window.scrollBy(0, -window.innerHeight);
            menuBTNCheck = true;
        }
        
        else{
            $('body').css({
                'overflow': 'unset'
            })
            $('.mobile-menu-wrapper').css({
                'background-color': 'transparent',
            })
            $('.mobile-menu-wrapper').delay(200).queue(function(next){
                $(this).css({
                    'min-height': 'unset'  
                })
                next();
            })
//Display none
            $('.landing-content').css({
                'display': 'flex'
            })
            $('.absolute-icons').css({
                'visibility': 'visible',
                'opacity': '1'
            })
            $('main').css({
                'display': 'block'  
            })
            $('.landing-particles').css({
                'display': 'block'
            })
            $('.menu').css({
                'display': 'none'
            })
            $('.menu').css({
                'margin-left': '50px',
                'opacity': '0'
            });

//Body stuff
            $('body').css({
                'overflow': 'unset'
            })
            menuBTNCheck = false;
        }
        
    })
///////////////////////////////////////////////////////////Mobile menu logic

$.each($('.mobile-sub-btn'), function(){
    $(this).find('.mobile-flex').click(()=>{
        if($(this).find('.sub-menu-wrapper').hasClass('mobile-menu-toggle')){
            $(this).find('.sub-menu-wrapper').removeClass('mobile-menu-toggle');
        }else{
            $.each($('.sub-menu-wrapper'),function(){
                $(this).removeClass('mobile-menu-toggle');
            })
            $(this).find('.sub-menu-wrapper').addClass('mobile-menu-toggle');
        }    
    }) 
})

$.each($('.sub-and-sub-sub'), function(){
    $(this).find('.sub-menu-li').click(()=>{
        if($(this).find('.sub-sub-menu').hasClass('mobile-menu-toggle')){
            $(this).find('.sub-sub-menu').removeClass('mobile-menu-toggle');
        }else{
            $.each($('.sub-sub-menu'),function(){
                $(this).removeClass('mobile-menu-toggle');
            })
            $(this).find('.sub-sub-menu').addClass('mobile-menu-toggle');
        }
    })
})
})
///////////////////////////////////////////////////////////Section3 button
$('.flex-btn').mouseover(()=>{
    $('.flex-device-line').animate({
        width: '100%'
    }, 100)
    $('.flex-device-line').animate({
        width: '90%'
    }, 100)
})

$('.flex-btn').mouseout(()=>{
    $('.flex-device-line').animate({
        width: '75%'
    }, 100)
    $('.flex-device-line').animate({
        width: '85%'
    }, 100)
})
///////////////////////////////////////////////////////////Section5 down button
$('.section5-down-wrapper').click(()=>{
    $('body,html').animate({
        scrollTop: $('.section5-wrapper').offset().top
    }, 1000)
})
///////////////////////////////////////////////////////////Carousel
$('#carousel').owlCarousel({
    margin: 50,
    dots: true,
    responsive:{
        0: {items: 1},
        600:{items: 2},
        1200: {items:3}
    }
})