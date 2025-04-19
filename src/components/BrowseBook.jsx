

import { useState } from "react";
import AllBook from "./AllBook";
import "./BrowseBook.css";
import { books } from "../utils/bookmockData";

const BrowseBook = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = () => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = books.filter(
      (book) =>
        book.bookname.toLowerCase().includes(lowercasedTerm) ||
        book.author.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredBooks(filtered);
    setSearchTerm("")
  };

  return (
    <div className="books-all" >
      <div className="search-input">
        <div className="browse-search">
          <input
            type="text"
            placeholder="Search here.."
            className="input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        {filteredBooks.length > 0 ? (
          <AllBook books={filteredBooks} />
        ) : (
          <h4 style={{ color: "red", textAlign: "center", marginTop: "20px" }}>
            No Book found
          </h4>
        )}
      </div>
    </div>
  );
};

export default BrowseBook;
