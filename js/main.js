$(document).ready(function(){
    if(window.innerWidth>480){
        $('#wrap #main').css('z-index', '100')
        $('#wrap .nav li').eq(0).addClass('on')
        mouseBtnUp()
        
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
                
                    case 2: case 4:
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
                
                case 2: case 4:
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

    




    // 스킬
    $('#skill_in>ul>li').click(function(){
        $('#wrap').append('<div class="skill_info_box_bg"></div>')
    })





    // 프로젝트
    

    let currentProject=0

    $('#projects .left_btn').hide()
    const moveLeft=()=>{
        n=currentProject+1
        $('#projects_in>ul').animate({left: (-1200)*n+'px'},500)
        currentProject=n
        if(currentProject==2){
            $('#projects .right_btn').hide()
        }else if(currentProject==1){
            $('#projects .left_btn').show()
        }
        
    }

    const moveRight=()=>{
        n=currentProject-1
        $('#projects_in>ul').animate({left: (-1200)*n+'px'},500)
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




    // contact박스
    let contactOpen='closed'

    $('#wrap .contact_box_open_btn').click(()=>{
        if(contactOpen=='closed'){
            contactOpen='open'
            $('#wrap #contact_box').css({opacity: '0', display: 'block'}).animate({opacity: '1'},800)
        }
    })

    $('#wrap .contact_box_close_btn').click(()=>{
        if(contactOpen=='open'){
            contactOpen='closed'
            $('#wrap #contact_box').animate({opacity:'0'},800,function(){
                $(this).css({display: 'none'})
            })
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


    // 마우스버튼 나타나는 함수
    function mouseBtnUp(){
        $('#mouse_btn').css({bottom: '-100px'}).animate({bottom: '30px'},1000)
    }



    }
    
})

