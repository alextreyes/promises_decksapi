let baseURL = "https://deckofcardsapi.com/api/deck";
async function getData() {
  let res = await $.getJSON(`${baseURL}/new/draw/`);
  console.log(res.cards[0].value, res.cards[0].suit);
}
getData();

async function getCards() {
  let firstCardData = await $.getJSON(`${baseURL}/new/draw/`);
  let deckId = firstCardData.deck_id;
  let secondCardData = await $.getJSON(`${baseURL}/${deckId}/draw/`);
  [firstCardData, secondCardData].forEach((card) => {
    let { suit, value } = card.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
  });
}
getCards();

async function setup() {
  let $button = $("button");
  let $cards = $("#cards");

  let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
  $button.show().on("click", async function () {
    let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
    let cardSrc = cardData.cards[0].image;
    $cards.append(
      $("<img>", {
        src: cardSrc,
      })
    );
    if (cardData.remaining === 0) $button.remove();
  });
}
setup();
