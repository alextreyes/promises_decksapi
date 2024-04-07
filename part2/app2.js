let deck = 0;

$.getJSON("https://deckofcardsapi.com/api/deck/new/draw/").then((data) => {
  console.log(data.cards[0].suit, data.cards[0].value);
});

let firstCard = null;
$.getJSON("https://deckofcardsapi.com/api/deck/new/draw/")
  .then((data) => {
    firstCard = data.cards[0];
    let deckId = data.deck_id;
    return $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`);
  })
  .then((data) => {
    let secondCard = data.cards[0];
    [firstCard, secondCard].forEach(function (card) {
      console.log(card.suit, card.value);
    });
  });

let id = null;
let $button = $("button");
let $cards = $("#cards");

$.getJSON(`https://deckofcardsapi.com/api/deck/new/shuffle/`).then((data) => {
  id = data.deck_id;
  $button.show();
});

$button.on("click", function () {
  $.getJSON(`https://deckofcardsapi.com/api/deck/${id}/draw/`).then((data) => {
    let cardSrc = data.cards[0].image;
    $cards.append(
      $("<img>", {
        src: cardSrc,
      })
    );
    if (data.remaining === 0) $button.remove();
  });
});
