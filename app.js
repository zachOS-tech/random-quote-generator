let quote = document.querySelector(".quote");
let text = document.querySelector(".quote__text");
let author = document.querySelector(".quote__author");
let btn = document.querySelector("button");

function getQuote() {
  fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let index = Math.round(Math.random() * 1643);
      text.innerHTML = data[index].text;
      author.innerHTML = "- " + data[index].author;
    });

  setTimeout(() => {
    btn.classList.add("active");
  }, 3000);
}

function newQuote(e) {
  if (!e.target.matches("button.active")) return;
  getQuote();
  btn.classList.remove("active");
}

window.addEventListener("load", getQuote);
quote.addEventListener("click", newQuote);
