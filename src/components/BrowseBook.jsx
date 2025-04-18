

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
  };

  return (
    <div>
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
      <AllBook books={filteredBooks} />
    </div>
  );
};

export default BrowseBook;
