const $elm = document.querySelectorAll("main > .section");
const elmCount = $elm.length;

$elm.forEach(function (item, idx) {
  item.addEventListener("mousewheel", function (event) {
    let delta = 0;
    if (event.wheelDelta) {
      delta = event.wheelDelta;
    }

    let moveTop = window.scrollY;
    let elmSelector = $elm[idx];

    if (delta < 0) {
      if (elmSelector !== elmCount - 1) {
        try {
          moveTop =
            window.pageYOffset +
            elmSelector.nextElementSibling.getBoundingClientRect().top;
          console.log(moveTop);
        } catch (event) {}
      }
    } else {
      if (elmSelector !== 0) {
        try {
          moveTop =
            window.pageYOffset +
            elmSelector.previousElementSibling.getBoundingClientRect().top;
          console.log(moveTop);
        } catch (event) {}
      }
    }

    window.scrollTo({ top: moveTop, left: 0 });
  });
});

const $topNav = document.querySelector(".gnb");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  if (scrollTop > 0) {
    $topNav.classList.remove("on");
  } else {
    $topNav.classList.add("on");
  }

  $elm.forEach(function (item, idx) {
    let $navLink = document.querySelectorAll(".gnb ");
    if (scrollTop >= item.offsetTop) {
      $navLink.forEach(function (a) {
        a.classList.remove("on");
      });
      document
        .querySelector(`.gnb a:nth-of-type(${idx + 1})`)
        .classList.add("on");
    }
  });
});
