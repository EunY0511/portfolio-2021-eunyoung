// 외부 스크립트는 head에 받아와서 먼저 읽기 때문에, 문서가 준비되면 함수를 실행하라고 지정해줌.
$(document).ready(function(){
    $('.project__slider').bxSlider({
        slideWidth:400,
        slideMargin:30,
        prevText:'<i class="fas fa-chevron-left"></i>',
        nextText:'<i class="fas fa-chevron-right"></i>',
        pagerType:'short'
    });

    // 프로젝트 드롭다운
    $("#portFolioBtn").click(function(){
        if ($("#portFolio__expanded-hidden").is(":visible")){
            $("#portFolio__expanded-hidden").slideUp(); 
        } else {
            $("#portFolio__expanded-hidden").slideDown(); 
        } });

    $("#kakaoTalkBtn").click(function(){
        if ($("#kakaoTalk__expanded-hidden").is(":visible")){
            $("#kakaoTalk__expanded-hidden").slideUp(); 
        } else {
            $("#kakaoTalk__expanded-hidden").slideDown(); 
        } });

    $("#toDoListBtn").click(function(){
        if ($("#toDoList__expanded-hidden").is(":visible")){
            $("#toDoList__expanded-hidden").slideUp(); 
        } else {
            $("#toDoList__expanded-hidden").slideDown(); 
        } });            


});


// //  스크롤 이동    
// window.addEventListener("wheel", function(e){
//     e.preventDefault();
// },{passive : false});


// const target_1 = document.querySelector('.section_1');
// // const target_2 = document.querySelector('.section_2');
// // const target_3 = document.querySelector('.section_3');

// // const target_dict = {0: 0, 1: target_1, 2: target_2, 3: target_3}
// var page = 1;
// var mHtml = $("html");

// mHtml.animate({scrollTop : 0}, 10);

// $(window).on("wheel", function(e) {
//     if(mHtml.is(":animated")) return;
//     console.log(e.originalEvent.deltaY)
//     if(e.originalEvent.deltaY > 0) {
//         if(page == 4) return;
//         page++;
//     } else if(e.originalEvent.deltaY < 0) {
//         if(page == 1) return;
//         page--;
//     }
//     if(page==1) {
//         var posTop = 0
//     } else {
//         var posTop =(page-1) * $(target_1).height() + 250;
//     }
//     // 페이지 높이가 전부 다르기 떄문에 (page-1 *)를 사용할 수 없음

//     console.log(posTop)
//     mHtml.animate({scrollTop : posTop});
// })