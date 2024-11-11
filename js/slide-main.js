window.addEventListener("load", function () {
  const MAIN_DATA_URL = "/apis/main.json";

  fetch(MAIN_DATA_URL)
    .then(function (response) {
      const result = response.json();
      return result;
    })
    .then(function (result) {
      let htmlMainSlide = "";

      for (let i = 0; i < 4; i++) {
        const tag = `
          <div class="swiper-slide">
            <a href="${result[i].url}">
              <img src="./images/${result[i].pic}" alt="${result[i].title}" />
              <span class="swiper-main-txt">${result[i].title}</span>
            </a>
          </div>
        `;
        htmlMainSlide += tag;
      }

      const mainSlideTag = document.querySelector("#main-slide");
      mainSlideTag.innerHTML = htmlMainSlide;
    })
    .catch(function () {});

  const visualSlideSW = new Swiper(".visual-slide", {
    loop: true,
    pagination: { el: ".visual-slide .swiper-pagination", clickable: true },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 1000,
  });

  const visualSlide = document.querySelector(".visual-slide");
  visualSlide.addEventListener("mouseenter", function () {
    visualSlideSW.autoplay.stop();
  });
  visualSlide.addEventListener("mouseleave", function () {
    visualSlideSW.autoplay.start();
  });
});
