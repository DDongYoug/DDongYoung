$(document).ready(function(){
    $('#wrap .chart').circleProgress({
        size:150,
        //그래프 크기
        startAngle: -Math.PI/2 ,
        //시작지점 (기본값 Math.PI)
        thickness:20,
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
})