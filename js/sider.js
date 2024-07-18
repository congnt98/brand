document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 5,
    perMove: 1,
    gap: 60,
    breakpoints: {
      1440: {
        perPage: 3,
      },
      991: {
        perPage: 2,
      },
      767: {
        perPage: 1,
        pagination: false,
      },
    },
    classes: {
      arrows: "splide__arrows arrows",
      arrow: "arrow",
      prev: "arrow-left",
      next: "arrow-right",
      pagination: " dots-list",
      page: "dot-item",
    },
  });
  splide.mount();
});
