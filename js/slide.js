$(document).ready(function() {
    var current = 0; 
    var setIntervalId;

    //자동실행문 제어하는 함수
    $('.slide').on({
        mouseover: function(){
            clearInterval(setIntervalId);
        },
        mouseout: function(){
            timer();
        }
    })

    $('.mainimg').on({
        mouseover: function(){
            clearInterval(setIntervalId);
        },
        mouseout: function(){
            timer();
        }
    })

    //자동실행 함수
    timer();
    function timer() {
        setIntervalId = setInterval(function() {
            var n = current + 1;
            if(n == 3) {
                n = 0;
            }
            move(n);
        }, 5000)
    }

    //애니메이션
    function move(i) {
        
        if( i == current ) return;
        
        var currentEl = $(".view > li ").eq(current);
        var nextEl = $(".view > li ").eq(i);

        currentEl.css({ left: "0%" }).stop().animate({ left: "-100%" });
        nextEl.css({ left: "100%" }).stop().animate({ left: "0%" });

        current = i; 
    }
})

//로케이션
$(document).ready(function() {
    var current = 0; 
    var setIntervalId;

    //자동실행문 제어하는 함수
    $('.slide').on({
        mouseover: function(){
            clearInterval(setIntervalId);
        },
        mouseout: function(){
            timer();
        }
    })

    $('.mainimg').on({
        mouseover: function(){
            clearInterval(setIntervalId);
        },
        mouseout: function(){
            timer();
        }
    })

    //자동실행 함수
    timer();
    function timer() {
        setIntervalId = setInterval(function() {
            var n = current + 1;
            if(n == 3) {
                n = 0;
            }
            move(n);
        }, 5000)
    }

    //애니메이션
    function move(j) {
        
        if( j == current ) return;
        
        var currentEl = $(".m_slide > li ").eq(current);
        var nextEl = $(".m_slide > li ").eq(j);

        currentEl.css({ left: "0%" }).stop().animate({ left: "-100%" });
        nextEl.css({ left: "100%" }).stop().animate({ left: "0%" });

        current = j; 
    }
})