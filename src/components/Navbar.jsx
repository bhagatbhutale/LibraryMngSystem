
import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Library Management System</h2>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/browse">Browse Book</Link>
        </li>
        <li>
          <Link to="/add">Add Book</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
