import { Link } from "react-router-dom";
// import { books } from "../utils/bookmockData";
import "./Allbook.css"
const AllBook = ({books}) => {

 return (
   <div className="book-list-container">
     {books.map((book, index) => (
       <div key={index} className="book-card">
         <div className="book-info">
           <h3>{book.bookname}</h3>
           <p>By: {book.author}</p>
           <Link to={`/book/${book.id}`}>
             <button className="btn">
               View Details
             </button>
           </Link>
         </div>
       </div>
     ))}
   </div>
 );
};


export default AllBook
