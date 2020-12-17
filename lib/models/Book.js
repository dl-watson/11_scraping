const pool = require("../utils/pool");

module.exports = class Book {
  id;
  bookTitle;
  coverImgUrl;
  bookRating;
  bookPrice;
  titleInStock;

  constructor(row) {
    this.id = row.id;
    this.bookTitle = row.book_title;
    this.coverImgUrl = row.cover_img_url;
    this.bookRating = row.book_rating;
    this.bookPrice = row.book_price;
    this.titleInStock = row.title_in_stock;
  }

  // INSERT
  static async insert(data) {
    const { rows } = await pool.query(
      `
    INSERT INTO books (book_title, cover_img_url, book_rating, book_price title_in_stock) 
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `,
      [
        data.bookTitle,
        data.coverImgUrl,
        data.bookRating,
        data.bookPrice,
        data.titleInStock,
      ]
    );

    return new Book(rows[0]);
  }
};
