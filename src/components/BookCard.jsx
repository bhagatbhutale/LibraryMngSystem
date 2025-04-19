import React from "react";
import "./BookCard.css"

const BookCard = ({ book }) => {
  // bookCard Component
  return (
    <div className="book-div" >
      <div className="book-card">
        <h3 className="book-title">{book.bookname}</h3>
        <p className="book-date">Published on: {book.bookpublishdate}</p>
      </div>
    </div>
  );
};

export default BookCard;
