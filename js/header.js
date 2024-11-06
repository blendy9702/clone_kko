window.addEventListener("load", function () {
  console.log("load 완료");
  // 보관함을 만들고
  // 라벨을 붙여주겠다.
  // 그리고 라벨이 붙은 보관함에 재료를 담겠다.
  // 그리고, 제어하겠다

  /*
    1.사용자가 스크롤바로 화면아래로 이동시
    2. header class 하단에 라인을 생성
    3. 사용자가 스크롤바로 화면 최상단으로 이동시
    4. header class 에 하단 라인 제거
  */
  //  header를 보관함에 담아둔다.
  const header = document.querySelector(".header");
  //   console.log(header);

  //   스크롤 체크하기
  window.addEventListener("scroll", function () {
    const scrollPositionY = window.scrollY;
    // console.log(scrollPositionY);
    // header 에 class 추가하기
    if (scrollPositionY > 0) {
      header.classList.add("header-active");
    } else {
      header.classList.remove("header-active");
    }
  });
});

// 이미지 바꾸기 및 메뉴 펼치기
window.addEventListener("load", function () {});
