import React from "react";
import "./BookCard.css"

const BookCard = ({ book }) => {
  return (
    <div className="book-div" >
      <div className="book-card">
        <img src={book.bookimglink} alt={book.bookname} className="book-img" />
        <h3 className="book-title">{book.bookname}</h3>
        <p className="book-date">Published on: {book.bookpublishdate}</p>
      </div>
    </div>
  );
};

export default BookCard;
