const converter = require("number-to-words");

module.exports = (document) => {
  const products = document.querySelectorAll(".product_pod");

  return [...products].map((product) => ({
    bookTitle: [...products]
      .map((product) => product.querySelector(".product_pod > h3 > a"))
      .map((title) => title.outerText),
    coverImgUrl: [...products]
      .map((products) => products.querySelector("img.thumbnail"))
      .map((img) => img.currentSrc),
    bookRating: [...products].map((product) =>
      product
        .querySelector(".star-rating")
        .classList[1].toLowerCase()
        .map((word) => converter.toWordsOrdinal(word))
    ),
    titleInStock: "",
  }));
};
