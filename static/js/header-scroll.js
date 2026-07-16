// Enable hidden nav bar

const header = document.querySelector(".header");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 50) {
    header.classList.add("header-hidden");
  } else if (scrollTop < lastScrollTop) {
    header.classList.remove("header-hidden");
  }

  lastScrollTop = Math.max(0, scrollTop);
});
