window.addEventListener("load", function () {
  const CARDS_DATA_URL = "/apis/cards.json";

  fetch(CARDS_DATA_URL)
    .then(function (response) {
      //   console.log("카드 : ", response);
      const result = response.json();
      return result;
    })

    .then(function (result) {
      //   console.log("카드 결과 : ", result);
      let htmlCards = "";
      for (let i = 0; i < 5; i++) {
        const tag = `
        <a href="${result[i].link}" class="card-wrap">
            <div class="card-img">
                <img src="./images/${result[i].imgpath}"/ alt="${result[i].cardname}">
            </div>
            <div class="card-info">
                <h5 class="card-cate">${result[i].cardname}</h5>
                <span class="card-count">${result[i].cardno}</span>
            </div>
            </a>`;
        // console.log(tag);
        htmlCards += tag;
      }
      //   console.log(htmlCards);
      const cardsTag = document.querySelector("#cards-api");
      // console.log(cardsTag);
      cardsTag.innerHTML = htmlCards;
    })
    .catch(function () {});
});
