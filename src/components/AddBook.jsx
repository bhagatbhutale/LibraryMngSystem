import { useState } from "react";
import { books } from "../utils/bookmockData"; 
import "./AddBook.css"
import { useNavigate } from "react-router-dom";

const AddBook = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    bookname: "",
    author: "",
    description: "",
    bookpublishDate: "",
    rating: "",
    bookimglink: "",
    bookType: "",
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
    const newId =
      books.length > 0 ? Math.max(...books.map((b) => b.id)) + 1 : 1;

    const newBook = {
      id: newId,
      ...formData,
    };

    // push added book in books
    books.push(newBook);
    alert("Book added successfully!");
    navigate("/browse")
    setFormData({
      bookname: "",
      author: "",
      description: "",
      bookpublishDate: "",
      rating: "",
      bookimglink: "",
      bookType: "",
    });
  };

  return (
    <div className="add-book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="bookname"
          placeholder="Book Name"
          value={formData.bookname}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="bookpublishDate"
          value={formData.bookpublishDate}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="rating"
          placeholder="Rating (e.g. 4/5)"
          value={formData.rating}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="bookimglink"
          placeholder="Image URL (optional)"
          value={formData.bookimglink}
          onChange={handleChange}
        />
        <select
          name="bookType"
          value={formData.bookType}
          onChange={handleChange}
          required
          className="option"
        >
          <option value="">Select Book Type</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="etc">Etc</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
