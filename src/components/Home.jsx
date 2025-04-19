import React from 'react'
import "./Home.css"
import BookCard from './BookCard';

import { Link } from 'react-router-dom';
import AllBook from './AllBook';
import { books } from '../utils/bookmockData';

// React Icons Used 
import { RiBookShelfLine } from "react-icons/ri";
import { GiBookshelf } from "react-icons/gi";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="welcome-section">
            <h1> <GiBookshelf />  Welcome to Online Library</h1>
          </div>
          <div className="category-section">
            <h2>Books Category</h2>
            <div className="category-buttons">
              <Link to="/books/Fiction">
                <button className="category-link">Fiction</button>
              </Link>
              <Link to="/books/Non-Fiction">
                <button className="category-link">Non-Fiction</button>
              </Link>
              <Link to="/books/Sci-Fi">
                <button className="category-link">Sci-Fi</button>
              </Link>
              <Link to="/books/etc">
                <button className="category-link">etc</button>
              </Link>
            </div>
          </div>
          <div className="popular-section">
            <h3>Popular Book</h3>
            <div className="bookcart">
              <AllBook books={books.slice(0, 2)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home
