const Book = require("../models/Book");

module.exports = (products) => {
  return Promise.all(products.map((product) => Book.insert(product)));
};
