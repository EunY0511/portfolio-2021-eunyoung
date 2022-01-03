const toggleBtn = document.querySelector(".nav-bar__toggleBtn");
const menu = document.querySelector(".nav-bar__menu");
const icons = document.querySelector(".nav-bar__icon");


// 클릭 할 때마다 지정한 함수를 호출하기 (API)
// 클릭 할 때마다 menu와 icons 클래스가 active가 없다면 추가해주고 있다면 빼주겠다.
toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    icons.classList.toggle("active");
});

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡ화면 전환 애니메이션ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const clickBtn = document.getElementById("homeBtn");
// var link = document.location.href;

// btn_dict = {"Home": 0, "Introduce": 1, "My Project": 2, "Guest Book": 3}
// link_dict = {"http://127.0.0.1:5501/index.html#": 0,
//              "http://127.0.0.1:5501/introduce.html#": 1,
//              "http://127.0.0.1:5501/project.html#": 2,
//              "http://127.0.0.1:5501/guest-book.html#": 3}


// function btnClick(event) {
//     event.preventDefault();
//     const target =  event.target;

//     const presentPage = link_dict[link]
//     const nextPage = btn_dict[target.text]

//     }

// menu.addEventListener("click", btnClick);