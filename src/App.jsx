import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BrowseBook from "./components/BrowseBook";
import AddBook from "./components/AddBook";

import { books  } from "./utils/bookmockData"
import BookDetail from "./components/BookDetail";

import CategoryBooks from "./components/CategoryBooks";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";


function App() {

  return (
    <Router>
      <Navbar />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BrowseBook />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/book/:id" element={<BookDetail books={books} />} />
          <Route path="/books/:category"  element={ <CategoryBooks /> } />
          <Route path="*" element={ <ErrorPage /> } />
        </Routes>
      </>
      <Footer />
    </Router>
  );
}

export default App;
