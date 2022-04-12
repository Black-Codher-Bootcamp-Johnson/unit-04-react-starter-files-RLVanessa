import { Link } from "react-router-dom";
import React, { useState } from "react";

function Header() {
  return (
    <React.Fragment>
      <h1>BlackLove Bookcase App</h1>
      <Link to="/">Home</Link>
      <Link to="/.Pages/About">About Use</Link>
      <Link to="/.Pages/New">New Reads</Link>
      <Link to="/.Pages/BestReads">BestReads</Link>
      <Link to="/.Pages/MyBooks">My Books</Link>
      <Link to="/bookcase" className="bookLink">
        {" "}
        Bookcase
      </Link>
    </React.Fragment>
  );
}

export default Header;
