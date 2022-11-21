$(document).ready(function(){
    if(window.innerWidth>480){
        $('#wrap .nav li').eq(0).addClass('on')
    //네비 버튼 클릭시 해당div로 이동
    let current=0  //현재 div 요소의 상태값을 설정
    let moving_stop=false  //지연함수를 주기 위한 상태값설정

    $('#wrap .nav li').click(function(e){
        e.preventDefault()
        var i=$(this).index()
        
        if(i>current){
            moveUp(i)
        }else if(i<current){
            moveDown(i)
        }else{
            return
        }
    })


    //애니메이션이 실행되는 동안 다른 동작을 막기 위해서
    //setTimeout 함수를 이용해 지연시간을 줌
    const setTimeoutMS=function(){
        setTimeout(() => {
            moving_stop=false
        }, 1000)
    }      


    function moveUp(n){
        if(moving_stop==false){
            moving_stop=true
            $('#wrap #total_box>div').css('z-index','0')
            $('#wrap .nav li').removeClass('on').removeClass('on1')
            var currentEl=$('#wrap #total_box>div').eq(current)
            var nextEl=$('#wrap #total_box>div').eq(n)    

            currentEl.css('z-index','50')
            nextEl.css('z-index','30').css({left: '0', top: '0'})
            currentEl.css({top: '0'}).animate({top: '-100vh'},1000, )

            // 네비버튼색 바꾸기
            switch(n){
                case 0: case 1: case 3:
                    $('#wrap .nav li').eq(n).addClass('on')
                    break

                case 2:
                    $('#wrap .nav li').eq(n).addClass('on1') 
                    skillAni()
                    break

                case 4:
                    $('#wrap .nav li').eq(n).addClass('on1')
                    break
            }

            current=n
            setTimeoutMS()
        }
    }

    function moveDown(n){
        if(moving_stop==false){
            moving_stop=true
            $('#wrap #total_box>div').css('z-index','0')
            $('#wrap .nav li').removeClass('on').removeClass('on1')
            var currentEl=$('#wrap #total_box>div').eq(current)
            var nextEl=$('#wrap #total_box>div').eq(n)

            currentEl.css('z-index','30')
            nextEl.css('z-index','50')
            nextEl.css({top: '-100vh'}).stop().animate({top: '0'},1000)
            
            // 첫화면 마지막화면 버튼 숨기기, 네비버튼 Class
            switch(n){
                case 0: case 1: case 3:
                    $('#wrap .nav li').eq(n).addClass('on')
                    break

                case 2:
                    $('#wrap .nav li').eq(n).addClass('on1')
                    skillAni()
                    break

                case 4:
                    $('#wrap .nav li').eq(n).addClass('on1')
                    break
            }
            
            current=n
            setTimeoutMS()
        }
        
    }

    //마우스휠 이벤트
    $('#wrap').on("mousewheel", function(event, delta){
        if(current>0 && delta>0){
            var mousewheelUp=current-1
            moveDown(mousewheelUp)
        } else if(current<4 && delta<0){
            var mousewheelDown=current+1
            moveUp(mousewheelDown)
        }
    })

    //스킬

    const skillAni=()=>{setTimeout(() => {
            $('#wrap .chart').circleProgress({
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
        
            $('#wrap .chart1').circleProgress({
                value: 0.9,
                fill: {gradient: ['rgba(34,176,255,1)', 'rgba(255,255,255,1)']}
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(90 *progress) + '<i>%</i>');
            });
        
            $('#wrap .chart2').circleProgress({
                value: 0.8,
                fill: {gradient: ['rgba(34,176,255,1)', 'rgba(255,255,255,1)']}
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(80 *progress) + '<i>%</i>');
            });
        
            $('#wrap .chart3').circleProgress({
                value: 0.8,
                fill: {gradient: ['rgba(34,176,255,1)', 'rgba(255,255,255,1)']}
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(80 *progress) + '<i>%</i>');
            });
        
            $('#wrap .chart4').circleProgress({
                value: 0.7,
                fill: {gradient: ['rgba(34,176,255,1)', 'rgba(255,255,255,1)']}
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(70 *progress) + '<i>%</i>');
            });
        
            $('#wrap .chart5').circleProgress({
                value: 0.1,
                fill: {gradient: ['rgba(34,176,255,1)', 'rgba(255,255,255,1)']}
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(10 *progress) + '<i>%</i>');
            });
        
    }, 1000);}
            
    







    // 프로젝트
    







    // 마치며















    // contact박스
    let contactOpen='closed'

    $('#wrap .contact_box_open_btn').click(()=>{
        if(contactOpen=='closed'){
            contactOpen='open'
            $('#wrap #contact_box').css({display: 'block'})
        }
    })

    $('#wrap .contact_box_close_btn').click(()=>{
        if(contactOpen=='open'){
            contactOpen='closed'
            $('#wrap #contact_box').css({display: 'none'})
        }
    })







    //emailjs
    emailjs.init('tVuiXpFNR9keouxIi')

    const btn = document.getElementById('button');

    document.getElementById('form')
    .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'service_gv0uxmm';
    const templateID = 'template_nswn5ai';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
        btn.value = 'Send Email';
        alert('메일보내기 성공');
        }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
        });
    });

    }
    
    // 마우스 따라다니는 원
    var mouseCircle=$('#mouse_move_circle')

    $(window).on('mousemove', (e)=>{
        mouseCircle.css('left',e.pageX).css('top',e.pageY)
    })

    $('a').on('mouseenter',()=>{
        mouseCircle.css('width',50+'px').css('height',50+'px')
    })
    $('a').on('mouseleave',()=>{
        mouseCircle.css('width',30+'px').css('height',30+'px')
    })
})