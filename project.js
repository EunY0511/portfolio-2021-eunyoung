// 외부 스크립트는 head에 받아와서 먼저 읽기 때문에, 문서가 준비되면 함수를 실행하라고 지정해줌.
$(document).ready(function(){
    $('.kakao-project__slider').bxSlider({
        slideWidth:400,
        slideMargin:30,
        prevText:'<i class="fas fa-chevron-left"></i>',
        nextText:'<i class="fas fa-chevron-right"></i>',
        pagerType:'short'
    });

    $('.toDoList-project__slider').bxSlider({
        slideWidth:500,
        slideMargin:30,
        prevText:'<i class="fas fa-chevron-left"></i>',
        nextText:'<i class="fas fa-chevron-right"></i>',
        pagerType:'short'
    })

    // 프로젝트 드롭다운
    $(".kakao__expandBtn").click(function(){
        if ($("#kakao__expanded__hidden").is(":visible")){
            $("#kakao__expanded__hidden").slideUp(); 
        } else {
            $("#kakao__expanded__hidden").slideDown(); 
        } });

    $(".toDoList__expandBtn").click(function(){
        if ($("#toDoList__expanded__hidden").is(":visible")){
            $("#toDoList__expanded__hidden").slideUp(); 
        } else {
            $("#toDoList__expanded__hidden").slideDown(); 
        } });

    
});




 
