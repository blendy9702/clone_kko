window.addEventListener("load", function () {
  // api 주소 : json 주소가 어디있?
  const LOGO_DATA_URL = "/apis/logodata.json";
  // api 를 통한 데이터 불러오기
  // ---- request: 리퀘스트
  // api 를 통해 불러들여진 결과물
  //   ---- response : 리스폰스
  fetch(LOGO_DATA_URL)
    //   성공했을 때 할 행동
    .then(function (response) {
      const result = response.json();
      return result;
    })
    .then(function (result) {
      // 1. json 뜯기
      console.log(result);
      // 2. 반복해서 html 태그를 생성
      let logoHtml = "";
      for (let i = 0; i < 9; i++) {
        const data = `<img src="${result[i].imgUrl}" alt="${result[i].desc}" />`;
        logoHtml += data;
      }

      console.log(logoHtml);

      // 3. 생성된 html을 원하는 곳에 배치
      // 4. swiper 생성 및 실험
    })
    //   성공했을 때 할 행동
    .catch(function (error) {
      console.log(result);
    });

  // const logoData;

  const headerLogo = new Swiper(".header-logo-motion", {
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });
});
