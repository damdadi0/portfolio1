const elm = document.querySelectorAll(".sec");
const elmCount = elm.length;

elm.forEach((item, idx) => {
  item.addEventListener("mousewheel", function (e) {
    e.preventDefault();
    let delta = 0;
    if (e.wheelDelta) {
      delta = e.wheelDelta;
    }
    let moveTop = window.scrollY;
    let elmSelector = elm[idx];

    // 휠을 내렸을때 -
    if (delta < 0) {
      if (elmSelector !== elmCount - 1) {
        try {
          moveTop =
            window.pageYOffset +
            elmSelector.nextElementSibling.getBoundingClientRect().top;
        } catch (e) {}
      }
    } else {
      // 휠을 올렸을 때 +
      if (elmSelector !== 0) {
        try {
          moveTop =
            window.pageYOffset +
            elmSelector.previousElementSibling.getBoundingClientRect().top;
        } catch (e) {}
      }
    }
    window.scrollTo({ top: moveTop });
  });
});

// section 높이에 따라 .gnb a 요소 색상 바뀌는 부분
window.addEventListener("scroll", function (e) {
  let scrollTop = window.scrollY;
  elm.forEach((item2, i) => {
    if (scrollTop >= item2.offsetTop - 5) {
      document.querySelectorAll(".gnb a").forEach((li) => {
        li.classList.remove("on");
      });
      document
        .querySelector(".gnb a:nth-child(" + (i + 1) + ")")
        .classList.add("on");
    }
  });
});
