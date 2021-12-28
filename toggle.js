const toggleBtn = document.querySelector(".nav-bar__toggleBtn");
const menu = document.querySelector(".nav-bar__menu");
const icons = document.querySelector(".nav-bar__icon");


// 클릭 할 때마다 지정한 함수를 호출하기 (API)
// 클릭 할 때마다 menu와 icons 클래스가 active가 없다면 추가해주고 있다면 빼주겠다.
toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    icons.classList.toggle("active");
});


// introduce 애니메이션창
$( ".curtain__leaf" ).click(function() {
    $( ".curtain").toggleClass( "curtain__animation" );
    
  });
