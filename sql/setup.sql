DROP TABLE IF EXISTS books;

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    book_title TEXT NOT NULL,
    cover_img_url VARCHAR(2083) NOT NULL,
    book_rating TEXT NOT NULL,
    title_in_stock BOOLEAN NOT NULL
);