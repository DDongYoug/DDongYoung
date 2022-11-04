$(document).ready(function(){

    $('#move_btn .up_btn').hide()
    $('.nav li').eq(0).addClass('on')
    //네비 버튼 클릭시 해당div로 이동
    let current=0
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
    console.log(current)

    function moveup(n){
        $('#total_box>div').css('z-index','0')
        $('.nav li').removeClass('on')
        var currentEl=$('#total_box>div').eq(current)
        var nextEl=$('#total_box>div').eq(n)    

        currentEl.css('z-index','50')
        nextEl.css('z-index','30').css({left: '0', top: '0'})
        currentEl.css({top: '0'}).animate({top: '-100vh'},1000)
        
        $('.nav li').eq(n).addClass('on')
        
        // 첫화면 마지막화면 버튼 숨기기
        if(n==0){
            $('#move_btn .up_btn').hide()
        } 
        if(0<n<4){
            $('#move_btn .down_btn').show()
            $('#move_btn .up_btn').show()
        }
        if(n==4){
            $('#move_btn .down_btn').hide()
        }

        current=n
    }

    function movedown(n){
        $('#total_box>div').css('z-index','0')
        $('.nav li').removeClass('on')
        var currentEl=$('#total_box>div').eq(current)
        var nextEl=$('#total_box>div').eq(n)

        currentEl.css('z-index','30')
        nextEl.css('z-index','50')
        nextEl.css({top: '-100vh'}).stop().animate({top: '0'},1000)
        
        
        $('.nav li').eq(n).addClass('on')

        // 첫화면 마지막화면 버튼 숨기기
        if(n==4){
            $('#move_btn .down_btn').hide()
        }
        if(1<=n<=3){
            $('#move_btn .down_btn').show()
            $('#move_btn .up_btn').show()
        }
        if(n==0){
            $('.up_btn').hide()
            console.log('ok')
        } 
        
        current=n
    }
    





    //버튼 click시 div한개씩 이동
    $('.down_btn').click(function(){
        var m=current+1
        moveup(m)
    })

    $('.up_btn').click(function(){
        var m=current-1
        movedown(m)
    })
})