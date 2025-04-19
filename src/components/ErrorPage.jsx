import React from 'react'
import { Link } from 'react-router-dom';
import "./ErrorPage.css"
const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-content">
        <h1> 404 Page Not Found !</h1>
        <h3>Page Does Not Exist ...</h3>
        <Link to="/">
          <button>Go Back To HomePage</button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage
