module.exports = (document) => {
  const products = document.querySelectorAll(".product_pod");

  return [...products].map((product) => ({
    bookTitle: product.querySelector("h3").textContent,
    coverImgUrl: product.querySelector("img").src,
    bookRating: product
      .querySelector(".star-rating")
      .classList[1].toLowerCase(),
    bookPrice: product.querySelector(".price_color").textContent,
    titleInStock: stringToBool(
      product.querySelector(".instock").textContent.trim()
    ),
  }));
};

const stringToBool = (string) => {
  if (string === "In stock") return true;
  else return false;
};
