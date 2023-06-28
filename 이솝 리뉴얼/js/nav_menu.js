$(document).ready(function(){
    $('.sub').hide();

    $('.nav>li>a').click(function (e) {
        e.preventDefault(); 

        $('.sub').each(function() {
            if($(this).css('display') === "block") {
                $(this).hide();
            }
        });
        $(this).next('.sub').show().css({opacity: 0}).animate({ opacity: 1 });
    });

})
