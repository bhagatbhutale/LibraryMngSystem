
import { useParams , useNavigate } from "react-router-dom";
import './BookDetail.css'

const BookDetail = ({books}) => {
    // Book Details
    // Extract the id 
    const { id } = useParams();
    const navigate = useNavigate();

    const book = books.find((b) => b.id === parseInt(id));

    if (!book) return <p>Book not found</p>;

  return (
    <div className="book-detail">
      <button onClick={() => navigate(-1)}>← Back</button>
      <h2>{book.id}</h2>
      <h2> Book Name : {book.bookname}</h2>
      <br />
      <h3>BookType : {book.bookType}</h3>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Published:</strong> {book.bookpublishDate}
      </p>
      <p>
        <strong>Description : </strong> {book.description}
      </p>
      <br />
      <h2>
        <strong>Rating : </strong> {book.rating}
      </h2>
    </div>
  );
}

export default BookDetail


