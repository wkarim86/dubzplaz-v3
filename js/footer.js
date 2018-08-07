$(function(){
    
    $('.mobile-menu-button').click(function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
                $('.nav-mobile').removeClass('active');
            }else{
                $(this).addClass('active');
                $('.nav-mobile').addClass('active');
            }
        });
     
    
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
    console.log(scroll);
        if(scroll > 400){
            $('.bottomFromTop').css({'display' : 'block'});
        }else{
            $('.bottomFromTop').css({'display' : 'none'});
        }
    })
});