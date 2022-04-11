// Header sticky
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var headerSticky = $(".header__nav");
var topBar = $(".header__topbar");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        headerSticky.classList.add("scroll");
        topBar.classList.add("hide");
    } else {
        headerSticky.classList.remove("scroll");
        topBar.classList.remove("hide");
    }
}
// ScrollTop
var scrollTop = () => {
    var header = $(".header");
    header.scrollIntoView({ behavior: "smooth", block: "start" });
};

var scrollBtn = $(".scroll-top");
scrollBtn.addEventListener("click", scrollTop);
window.addEventListener("scroll", scrollBtnDisplay);

function scrollBtnDisplay() {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}
// Header menu modal

var box = $(".header__menu__overlay");
var boxBody = $(".header__menu__body--content");
var open = $("#menu_open");
var close = $("#menu_close");

open.onclick = function() {
    box.style.display = "block";
    boxBody.classList.add("open");
};

close.onclick = function() {
    box.style.display = "none";
    boxBody.classList.remove("open");
};
