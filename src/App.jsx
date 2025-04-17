import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BrowseBook from "./components/BrowseBook";
import AddBook from "./components/AddBook";


function App() {
  return (
    <Router>
      <Navbar />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowseBook />} />
          <Route path="/add" element={<AddBook />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
