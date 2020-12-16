const converter = require("number-to-words");

module.exports = (document) => {
  const products = document.querySelectorAll(".product_pod");

  return [...products].map((product) => ({
    bookTitle: [...product]
      .map((product) => product.querySelector(".product_pod > h3 > a"))
      .map((title) => title.outerText),
    coverImgUrl: [...product]
      .map((cover) => cover.querySelector("img.thumbnail"))
      .map((img) => img.currentSrc),
    bookRating: [...product].map((rating) =>
      rating
        .querySelector(".star-rating")
        .classList[1].toLowerCase()
        .map((word) => converter.toWordsOrdinal(word))
    ),
    titleInStock: [...products].map(
      (product) => !!product.querySelector("p.instock").innerText
    ),
  }));
};
