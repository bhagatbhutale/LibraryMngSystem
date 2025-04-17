import React from 'react'
import { useState } from 'react';

import "./AddBook.css"

const AddBook = () => {

  const [formData, setFormData] = useState({
    id: "",
    bookname: "",
    author: "",
    bookimglink: "",
    description: "",
    bookpublishdate: "",
  });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };


      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Book:", formData);
        alert("Book submitted successfully!");
        // Reset form
        setFormData({
          id: "",
          bookname: "",
          author: "",
          bookimglink: "",
          description: "",
          bookpublishdate: "",
        });
      };

  return (
    <div className="book-form-container">
      <form onSubmit={handleSubmit} className="book-form">
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="Book ID"
          required
        />
        <input
          type="text"
          name="bookname"
          value={formData.bookname}
          onChange={handleChange}
          placeholder="Book Name"
          required
        />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
          required
        />
        <input
          type="text"
          name="bookimglink"
          value={formData.bookimglink}
          onChange={handleChange}
          placeholder="Book Image Link"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          rows={3}
        />
        <input
          type="date"
          name="bookpublishdate"
          value={formData.bookpublishdate}
          onChange={handleChange}
        />
        <button type="submit">Submit Book</button>
      </form>
    </div>
  );
}

export default AddBook
