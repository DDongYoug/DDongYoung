$(document).ready(function(){

    $('.nav li').eq(0).addClass('on')
    //네비 버튼 클릭시 해당div로 이동
    var current=0
    $('.nav li').click(function(e){
        e.preventDefault()
        var i=$(this).index()
        
        if(i>current){
            moveup(i)
        }else if(i<current){
            movedown(i)
        }else{
            return
        }
    })


    //마우스휠 이벤트
    $('body').on("mousewheel", function(event, delta){
        if(delta>0){
            var p=current-1
            movedown(p)
        } else if(delta<0){
            var mousewheeldown=current+1
            moveup(mousewheeldown)
        }
    })


    function moveup(n){
        if(current==4){
            return
        }
        $('#total_box>div').css('z-index','0')
        $('.nav li').removeClass('on')
        var currentEl=$('#total_box>div').eq(current)
        var nextEl=$('#total_box>div').eq(n)    

        currentEl.css('z-index','50')
        nextEl.css('z-index','30').css({left: '0', top: '0'})
        currentEl.css({top: '0'}).animate({top: '-100vh'},1000)
        
        current=n
        $('.nav li').eq(n).addClass('on')
    }

    function movedown(n){
        if(current==0){
            return
        }
        $('#total_box>div').css('z-index','0')
        $('.nav li').removeClass('on')
        var currentEl=$('#total_box>div').eq(current)
        var nextEl=$('#total_box>div').eq(n)

        currentEl.css('z-index','30')
        nextEl.css('z-index','50')
        nextEl.css({top: '-100vh'}).stop().animate({top: '0'},1000)
        
        current=n
        $('.nav li').eq(n).addClass('on')
    }


    //스킬 상태바
})