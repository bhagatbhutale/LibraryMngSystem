import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = () => <h2>Welcome to Home</h2>;
const BrowseBook = () => <h2>Browse Books</h2>;
const AddBook = () => <h2>Add a New Book</h2>;

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowseBook />} />
          <Route path="/add" element={<AddBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
