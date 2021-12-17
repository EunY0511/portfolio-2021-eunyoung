const toggleBtn = document.querySelector(".nav-bar__toggleBtn");
const menu = document.querySelector(".nav__menu");
const icons = document.querySelector(".nav__icon");

toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    icons.classList.toggle("active");
});
// 클릭 할 때마다 지정한 함수를 호출하기 (API)
// 클릭 할 때마다 menu와 icons 클래스가 active가 없다면 추가해주고 있다면 빼주겠다.