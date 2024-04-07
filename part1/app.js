let favNum = 377;
let nums = [1, 2, 3];

$.getJSON("http://numbersapi.com/37/trivia?json").then((data) => {
  console.log(data);
});

$.getJSON(`http://numbersapi.com/${nums}/trivia?json`).then((data) => {
  console.log(data);
});

let arr = [];
function getNumberFacts(number) {
  $.getJSON(`http://numbersapi.com/${number}/trivia?json`).then((reponse) => {
    console.log(reponse.text);
    arr.push(response.text);
  });
}

Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON("http://numbersapi.com/37/trivia?json");
  })
).then((facts) => {
  facts.forEach((data) => $("body").append(`<p>${data.text}</p>`));
});
