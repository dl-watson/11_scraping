const pool = require("../utils/pool");

module.exports = class Book {
  id;
  bookTitle;
  coverImgUrl;
  bookRating;
  titleInStock;

  constructor(row) {
    this.id = row.id;
    this.bookTitle = row.book_title;
    this.coverImgUrl = row.cover_img_url;
    this.bookRating = row.book_rating;
    this.titleInStock = row.title_in_stock;
  }
};
