module.exports = (document) => {
  const products = document.querySelectorAll(".product_pod");

  return [...products].map((product) => ({
    bookTitle: product.querySelector("h3").textContent,
    coverImgUrl: product.querySelector("img").src,
    bookRating: product
      .querySelector(".star-rating")
      .classList[1].toLowerCase(),
    titleInStock: !product.querySelector("p.instock").innerText,
  }));
};
