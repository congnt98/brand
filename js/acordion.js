var children = document.querySelectorAll(".accordion__item");
children.forEach(function (child) {
  var header = child.querySelector(".accordion__header");
  var content = child.querySelector(".accordion__content");

  header.addEventListener("click", function () {
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      child.classList.remove("active");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      child.classList.add("active"); // Add the "active" clas
    }
  });
});
