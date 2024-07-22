let theme_btn = document.getElementById("theme_btn");
let gotademo = document.getElementById("gotademo");
let login_btn = document.getElementById("login_btn");
let login = document.getElementById("login");
let loader = document.getElementById("preloader");
let login_close_btn = document.getElementById("login_close_btn");

let transform_num = -50;

window.addEventListener("load", function () {
  loader.style.display = "none";
});

theme_btn.onclick = () => {
  document.body.classList.toggle("light-theme");
};

gotademo.onclick = () => {
  alert("don't working");
};

login_btn.onclick = () => {
  transform_num = 0;
  login.style.transform = `translateY(${transform_num}rem)`;
};

login_close_btn.onclick = () => {
  transform_num = -50;
  login.style.transform = `translateY(${transform_num}rem)`;
};

// document.addEventListener("click", (e) => {
//     if(transform_num == 0)
//         if (e.composedPath().includes(login) == false || e.composedPath().includes(login_btn) == false) {
//         transform_num = -50;
//         login.style.transform = `translateY(${transform_num}rem)`;
//         }
// });
