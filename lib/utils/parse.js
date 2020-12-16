// const converter = require("number-to-words");

module.exports = (document) => {
  const products = document.querySelectorAll(".product_pod");

  return [...products].map((product) => ({
    bookTitle: product.querySelector(".product_pod > h3 > a").textContent,
    coverImgUrl: product.querySelector(".thumbnail").currentSrc,
    bookRating: product
      .querySelector(".star-rating")
      .classList[1].toLowerCase(),
    titleInStock: !!product.querySelector("p.instock").innerText,
  }));
};
