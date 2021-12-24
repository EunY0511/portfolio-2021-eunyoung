const toggleBtn = document.querySelector(".nav-bar__toggleBtn");
const menu = document.querySelector(".nav-bar__menu");
const icons = document.querySelector(".nav-bar__icon");


// 클릭 할 때마다 지정한 함수를 호출하기 (API)
// 클릭 할 때마다 menu와 icons 클래스가 active가 없다면 추가해주고 있다면 빼주겠다.
toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    icons.classList.toggle("active");
});





// 거북이 슬라이드

// let slideIndex = 1;

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let slides = document.getElementsByClassName("slide");
//   let dots = document.getElementsByClassName("dot");

//   if (n > slides.length) {slideIndex = 1};
//   if (n < 1) {slideIndex = slides.length};

//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" move", "");
//   }

//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " move";
// }

// showSlides(slideIndex);