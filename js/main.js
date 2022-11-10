$(document).ready(function(){
    
    $('#move_btn .up_btn').hide()
    $('.nav li').eq(0).addClass('on')
    //네비 버튼 클릭시 해당div로 이동
    let current=0  //현재 div 요소의 상태값을 설정
    let moving_stop=false  //지연함수를 주기 위한 상태값설정

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


    //애니메이션이 실행되는 동안 다른 동작을 막기 위해서
    //setTimeout 함수를 이용해 지연시간을 줌
    const setTimeoutMS=function(){
        setTimeout(() => {
            moving_stop=false
            console.log(moving_stop)
            // clearInterval(skillAni)
        }, 1000)
    }      


    function moveup(n){
        if(moving_stop==false){
            moving_stop=true
            console.log(moving_stop)
            $('#total_box>div').css('z-index','0')
            $('.nav li').removeClass('on').removeClass('on1')
            var currentEl=$('#total_box>div').eq(current)
            var nextEl=$('#total_box>div').eq(n)    

            currentEl.css('z-index','50')
            nextEl.css('z-index','30').css({left: '0', top: '0'})
            currentEl.css({top: '0'}).animate({top: '-100vh'},1000, )
            // 첫화면 마지막화면 버튼 숨기기
            // if(n==0){
            //     $('#move_btn .up_btn').hide()
            // } 
            // if(0<n<4){
            //     $('#move_btn .down_btn').show()
            //     $('#move_btn .up_btn').show()
            // }
            // if(n==4){
            //     $('#move_btn .down_btn').hide()
            // }

            switch(n){
                case 0:
                    $('#move_btn .up_btn').hide()
                    $('#move_btn .down_btn').show()
                    $('.nav li').eq(n).addClass('on')
                    break

                case 1: case 3:
                    $('#move_btn .down_btn').show()
                    $('#move_btn .up_btn').show()
                    $('.nav li').eq(n).addClass('on')
                    break

                case 2:
                    $('#move_btn .down_btn').show()
                    $('#move_btn .up_btn').show()
                    $('.nav li').eq(n).addClass('on1') 
                    skillAni()
                    break

                case 4:
                    $('#move_btn .down_btn').hide()
                    $('#move_btn .up_btn').show()
                    $('.nav li').eq(n).addClass('on1')
            }

            current=n
            setTimeoutMS()
        }
    }

    function movedown(n){
        if(moving_stop==false){
            moving_stop=true
            $('#total_box>div').css('z-index','0')
            $('.nav li').removeClass('on').removeClass('on1')
            var currentEl=$('#total_box>div').eq(current)
            var nextEl=$('#total_box>div').eq(n)

            currentEl.css('z-index','30')
            nextEl.css('z-index','50')
            nextEl.css({top: '-100vh'}).stop().animate({top: '0'},1000)
            
            // 첫화면 마지막화면 버튼 숨기기
            // if(n==4){
            //     $('#move_btn .down_btn').hide()
            // }
            // if(1<=n<=3){
            //     $('#move_btn .down_btn').show()
            //     $('#move_btn .up_btn').show()
            // }
            // if(n==0){
            //     $('.up_btn').hide()
            //     console.log('ok')
            // } 

            switch(n){
                case 0:
                    $('#move_btn .up_btn').hide()
                    $('#move_btn .down_btn').show()
                    $('.nav li').eq(n).addClass('on')
                    break

                case 1: case 3:
                    $('#move_btn .down_btn').show()
                    $('#move_btn .up_btn').show()
                    $('.nav li').eq(n).addClass('on')
                    break

                case 2:
                    $('#move_btn .down_btn').show()
                    $('#move_btn .up_btn').show()
                    $('.nav li').eq(n).addClass('on1')
                    skillAni()
                    break

                case 4:
                    $('#move_btn .down_btn').hide()
                    $('#move_btn .up_btn').show()
                    $('.nav li').eq(n).addClass('on1')
            }
            
            current=n
            setTimeoutMS()
        }
        
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


    //마우스휠 이벤트
    $('body').on("mousewheel", function(event, delta){
        if(current>0 && delta>0){
            var mousewheelUp=current-1
            movedown(mousewheelUp)
        } else if(current<4 && delta<0){
            var mousewheelDown=current+1
            moveup(mousewheelDown)
        }
    })

    //스킬

    const skillAni=()=>{setTimeout(() => {
        console.log('ok')
            $('.chart').circleProgress({
                size:200,
                //그래프 크기
                startAngle: -Math.PI/2 ,
                //시작지점 (기본값 Math.PI)
                thickness:30,
                //그래프두께
                fill: {gradient: ['#ff1e41', '#ff9f8e']},
                //그래프 선 색
                emptyFill: "rgba(0,0,0,0.3)",
                //그래프 빈칸색 기본값 rgba(0,0,0,0.1)
                fill: {gradient: ['#ff1e41', '#ff9f8e']},
            })
        
            $('.chart1').circleProgress({
                value: 0.9,
                fill: {gradient: ['#ff1e41', '#ff9f8e']}
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(90 *progress) + '<i>%</i>');
            });
        
            $('.chart2').circleProgress({
                value: 0.8,
                fill: {gradient: ['#ff1e41', '#ff9f8e']}
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(80 *progress) + '<i>%</i>');
            });
        
            $('.chart3').circleProgress({
                value: 0.8,
                fill: {gradient: ['#ff1e41', '#ff9f8e']}
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(80 *progress) + '<i>%</i>');
            });
        
            $('.chart4').circleProgress({
                value: 0.7,
                fill: {gradient: ['#ff1e41', '#ff9f8e']}
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(70 *progress) + '<i>%</i>');
            });
        
            $('.chart5').circleProgress({
                value: 0.1,
                fill: {gradient: ['#ff1e41', '#ff9f8e']}
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(10 *progress) + '<i>%</i>');
            });
        
    }, 1000);}
            
    

})