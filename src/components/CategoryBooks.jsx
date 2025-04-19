import { useParams } from "react-router-dom";
import AllBook from "./AllBook";
import { books } from "../utils/bookmockData";
import "./Category.css"
const CategoryBooks = () => {
  const { category } = useParams();
  const filteredBooks = books.filter(
    (book) => book.bookType.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="catogery" >
      <h2 style={{ textAlign: "center", margin: "1rem 0" }}>
        {category} Books
      </h2>
      {filteredBooks.length > 0 ? (
        <AllBook books={filteredBooks} />
      ) : (
        <h4 style={{ textAlign: "center", marginTop: "20px" }}>
          No Book found in "{category}" category
        </h4>
      )}
    </div>
  );
};

export default CategoryBooks;
