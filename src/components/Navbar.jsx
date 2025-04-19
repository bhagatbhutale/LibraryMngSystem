import { Link } from "react-router-dom";
import "./Navbar.css"
import { RiBookShelfLine } from "react-icons/ri";

// React Icons Used 
import { FiHome} from "react-icons/fi";
import { MdFindInPage } from "react-icons/md";
import { MdOutlineAddBox } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <h2 className="logo">
          {" "}
          <GiBookshelf className="nav-icon" /> Library Management System
        </h2>
      </div>
      <div>
        <ul className="nav-links">
          <li>
            <Link to="/">
              {" "}
              <FiHome className="icon" /> Home
            </Link>
          </li>
          <li>
            <Link to="/books">
              <MdFindInPage className="icon" /> Browse Book
            </Link>
          </li>
          <li>
            <Link to="/add">
              {" "}
              <MdOutlineAddBox className="icon" /> Add Book
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
