window.addEventListener("load", function () {
  const visualSlideSW = new Swiper(".visual-slide", {
    loop: true,
    pagination: { el: ".visual-slide .swiper-pagination", clickable: true },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 1000,
  });
  // 개발자 추가 작업 : 마우스가 Enter 가 되면
  const visualSlide = document.querySelector(".visual-slide");
  // console.log(visualSlide);
  visualSlide.addEventListener("mouseenter", function () {
    // console.log("오버");
    visualSlideSW.autoplay.stop;
  });
  visualSlide.addEventListener("mouseleave", function () {
    // console.log("out");
    visualSlideSW.autoplay.start;
  });
});
