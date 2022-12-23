const $elm = document.querySelectorAll("div > .section");
const elmCount = $elm.length;

$elm.forEach(function (item, idx) {
  item.addEventListener("mousewheel", function (event) {
    let delta = 0;
    if (event.wheelDelta) {
      delta = event.wheelDelta;
    }

    let moveLeft = window.scrollY;
    let elmSelector = $elm[idx];

    if (delta < 0) {
      if (elmSelector !== elmCount - 1) {
        try {
          moveLeft =
            window.pageXOffset +
            elmSelector.nextElementSibling.getBoundingClientRect().left;
        } catch (event) {}
      }
    } else {
      if (elmSelector !== 0) {
        try {
          moveLeft =
            window.pageXOffset +
            elmSelector.previousElementSibling.getBoundingClientRect().left;
        } catch (event) {}
      }
    }

    window.scrollTo({ top: 0, left: moveLeft });
  });
});

const $topNav = document.querySelector(".top_menu");
window.addEventListener("scroll", function () {
  let scrollLeft = window.scrollX;
  $elm.forEach(function (item, idx) {
    let $navLink = document.querySelectorAll(".top_menu a");
    if (scrollLeft >= item.offsetLeft) {
      $navLink.forEach(function (a) {
        a.classList.remove("on");
      });
      document
        .querySelector(`.top_menu a:nth-of-type(${idx + 1})`)
        .classList.add("on");
    }
  });
});
