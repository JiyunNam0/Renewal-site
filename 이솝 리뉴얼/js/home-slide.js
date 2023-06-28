$(document).ready(function() {
    
    var current = 0;

    $('.prev').hide();

    $('.prev').click(function(e) {
        e.preventDefault();
        $('.next').show();
        if(current > 0) {
            current -= 1;
            movie(current);  
        }
    });

    $('.next').click(function(e) {
        e.preventDefault();
        $('.prev').show();
        if(current < 2) {
            current += 1;
            movie(current);
        }
    });

    function movie(n){
        var pos = (n * -460) + 'px';
        $('.home_view').animate({ left:pos }, 200);
        if(n == 2) {
            $('.next').hide();
        }else if (n == 0) {
            $('.prev').hide();
        }
        current = n; 
    }
})