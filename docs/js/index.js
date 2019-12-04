$(document).ready(()=>{
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
            $('.landing-content').css({
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
            $('.mobile-menu-wrapper').css({
                'transition': 'none',
                'min-height': 'unset',
                'background-color': 'transparent'
            })
//Display none
            $('.landing-content').css({
                'display': 'flex'
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
})