async function getFact() {
  let res = await $.getJSON("http://numbersapi.com/37?json");
  console.log(res);
}
getFact();

let nums = [1, 2, 3];
async function getSeveralNums() {
  let res = await $.getJSON(`http://numbersapi.com/${nums}?json`);
  console.log(res);
}
getSeveralNums();

async function getSeveralFacts() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON("http://numbersapi.com/37?json"))
  );
  facts.forEach((data) => {
    $("body").append(`<p>${data.text}</p>`);
  });
}
getSeveralFacts();
