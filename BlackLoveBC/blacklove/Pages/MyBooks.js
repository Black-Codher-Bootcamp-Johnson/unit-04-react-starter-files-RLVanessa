import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ".src/main.css";
import BestBooks from "../Pages/BestBooks";
import { application } from "express";

const App = () => {
  const [bookData, setBookdata] = useState([
    { BookName: "#", bookHref: "https://" },
  ]);
  const [bestBook, setBestBook] = useState({ bookName: "", bookHref: "" });

  const createBookShelf = (bookcase) => {
    let oldArray = bookData;
    let newArray = [...oldArray, bookcase];

    setBestBook(newArray, { bookHref: "", bookName: "" }); // not sure if I've done this right?
  };

  return (
    <Fragment>
      <nav className="navigation">
        <a>
          <img
            height="40px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          />
        </a>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>New Adventure</li>
          <li>Best Reads</li>
          <li>My Books</li>
        </ul>
        <main>
          <div className="leftContent">
            <img src="./src/bk.png" />
            <form onSubmit={(e) => e.preventDefault()}>
              <h2 className="formTitle">Add to Bookcase</h2>
              <div>
                <label 
                htmlFor="linkTitle"
                className="FormLabel">
                  Enter a Your bookname
                </label>
                <input
                  value={bestBook.bookHref}
                  onChange={(e) =>
                    setNewBook({ ...bestBook, bookHref: e.currentTarget.value })
                  }
                  type="text"
                  name="linkTitle"
                  minLength="1"
                  maxLength="25"
                  placeholder="Embark on a new journey"
                />
              </div>
              <div>
                <label 
                htmlFor="linkHref"
                className="FormLabel">
                  Enter a Your bookname
                </label>
                <input
                  value=""
                  onChange={(e) => setBestBook(e.target.value)}
                  type="text"
                  name="linkhref"
                  minLength="7"
                  placeholder="https://example.com/"/>
              </div>
              <button onClick={() => createBookShelf(bestBook)}>
                Add to Bookcase
              </button>
            </form>
            <BestBooks book={bookData}/>
          {/* </div>
          <div className="rightContent">
            <div className="linkCard"></div>
            <div className="linkCardImage" style={linkImageStyle}></div>
            <div className="linkCardLink">
              <h2>
                <a href="#">My Books!</a>
              </h2> */}
            {/* /* </div> */}
          </div> */
        </main>
      </nav>
    </Fragment>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export default MyBooks;