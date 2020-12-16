DROP TABLE IF EXISTS books;

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    book_title TEXT NOT NULL,
    cover_img_url VARCHAR(512) NOT NULL,
    book_rating INT NOT NULL CHECK( book_rating >= 0 AND book_rating <= 5),
    title_in_stock BOOLEAN NOT NULL
);