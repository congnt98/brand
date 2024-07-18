
var children = document.querySelectorAll(".header__menu-item");
children.forEach(function (child) {
  var link = child.querySelector(".header__menu-link");
  var sub = child.querySelector(".submenu");

  link.addEventListener("click", function () {
    if (sub.style.maxHeight) {
      sub.style.maxHeight = null;
      child.classList.remove("open");
    } else {
      sub.style.maxHeight = sub.scrollHeight + 40 + "px";
      child.classList.add("open");
    }
  });
});

var menuMobi = document.querySelectorAll(".container-fuild");
menuMobi.forEach(function (child) {
  let link = child.querySelector(".icon-menu");
  let sub = child.querySelector(".header__menu");
  let subBtn = child.querySelector(".sub-action-mobie");
  let subItem = child.querySelector(".header__menu-items");

  link.addEventListener("click", function () {
    if (sub.style.maxHeight) {
      sub.style.maxHeight = null;
      child.classList.remove("show-menu-mobi");
    } else {
      child.classList.add("show-menu-mobi");
      sub.style.maxHeight = sub.scrollHeight + "px";
    }
  });
});

document.querySelector(".btn-close").addEventListener("click", function() {
  const userAgent = navigator.userAgent;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    document.querySelector(".container-fuild").classList.remove("show-menu-mobi");
    document.querySelector(".header__menu").style.maxHeight = "";
  } else {
    document.querySelectorAll(".submenu").forEach(function(element) {
      element.style.maxHeight = "";
    });
    document.querySelectorAll(".header__menu-item").forEach(function(element) {
      element.classList.remove("open");
    });
  }
});


// func back to top
function bttBtn() {
  $("html, body").animate({ scrollTop: 0 }, 1000);
}
