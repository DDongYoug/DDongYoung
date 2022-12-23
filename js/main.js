$(document).ready(function(){
    if(window.innerWidth>480){
        $('#wrap #main').css('z-index', '100')
        $('#wrap .nav li').eq(0).addClass('on')
        
        let current=0  //현재 div 요소의 상태값을 설정
        let moving_stop=false  
        // 화면전환 중에 다른 함수가 먹히지 않게하기 위한 상태값설정
        
        $('#wrap #header .logo').click(function(){
            if(current==0){
                return
            }else{
                moveDown(0)
            }
        })

        //네비 버튼 클릭시 해당div로 이동
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

        function moveUp(n){
            if(moving_stop==false){
                moving_stop=true
                $('#wrap #total_box>div').css('z-index','0')
                $('#wrap .nav li').removeClass('on').removeClass('on1')
                var currentEl=$('#wrap #total_box>div').eq(current)
                var nextEl=$('#wrap #total_box>div').eq(n)    

                currentEl.css('z-index','50')
                nextEl.css('z-index','30').css({display:'block', left: '0', top: '0'})
                currentEl.css({top: '0'}).animate({top: '-100vh'},1000,function(){
                    currentEl.css({display: 'none'})
                    current=n
                    moving_stop=false
                })

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
            nextEl.css({display: 'block', top: '-100vh'}).animate({top: '0'},1000,function(){
                moving_stop=false
                current=n
            })
            
            // 네비버튼 addClass
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
        }
        
    }

    //마우스휠 이벤트
    $('#total_box').on("mousewheel", function(event, delta){
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
    

    let currentProject=0

    $('#projects .left_btn').hide()
    const moveLeft=()=>{
        n=currentProject+1
        $('#projects_in>ul').animate({left: (-1200)*n+'px'},1000)
        currentProject=n
        if(currentProject==2){
            $('#projects .right_btn').hide()
        }else if(currentProject==1){
            $('#projects .left_btn').show()
        }
        
    }

    const moveRight=()=>{
        n=currentProject-1
        $('#projects_in>ul').animate({left: (-1200)*n+'px'},1000)
        currentProject=n
        if(currentProject==0){
            $('#projects .left_btn').hide()
        }else if(currentProject==1){
            $('#projects .right_btn').show()
        }
        
    }

    $('#projects .right_btn').click(()=>{
        moveLeft()
    })  

    $('#projects .left_btn').click(()=>{
        moveRight()
    })





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
    
})

