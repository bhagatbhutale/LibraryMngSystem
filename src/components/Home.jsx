import React from 'react'
import "./Home.css"
import BookCard from './BookCard';

 const sampleBook = {
   bookimglink: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
   bookname: "The Silent Library",
   bookpublishdate: "2021-11-12",
 };

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="welcome-section">
            <h1>Welcome to Online Library</h1>
          </div>
          <div className="category-section">
            <h2>Category</h2>
            <div className="category-buttons">
              <button className="category-link">Fiction</button>
              <button className="category-link">Non-Fiction</button>
              <button className="category-link">Three</button>
              <button className="category-link">Sci-Fi</button>
            </div>
          </div>
          <div className="popular-section">
            <h3>Popular Book</h3>
            <div className='bookcart' >
              <BookCard book={sampleBook} />
              <BookCard book={sampleBook} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home
