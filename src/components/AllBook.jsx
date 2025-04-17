
import "./Allbook.css"
const AllBook = ({allbook}) => {
 return (
    <div className="book-list-container">
      {allbook.map((book) => (
        <div key={book.id} className="book-card">
          <img src={book.bookimglink} alt={book.bookname} className="book-img" />
          <div className="book-info">
            <h3>{book.bookname}</h3>
            <p>By: {book.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default AllBook
