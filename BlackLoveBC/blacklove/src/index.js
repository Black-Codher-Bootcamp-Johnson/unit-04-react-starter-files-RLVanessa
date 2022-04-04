import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import ".src/main.css";
import NewBooks from "../Pages/NewReads";

const App = () => {
  const [bookData, setBookdata] = useState([
    { BookName: "my book", bookHref: "https://" },
  ]);
  const [newBook, setNewBook] = useState({ bookName: "", bookHref: "" });

  const createBookShelf = (bookcase) => {
    let oldArray = bookData;
    let newArray = [...oldArray, bookcase];

    setNewBook(newArray, { bookHref: "", bookName: "" }); // not sure what this does
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
                <label for="linkTitle" className="FormLabel">
                  Enter a Your bookname
                </label>
                <input
                  value={newBook.bookHref}
                  onChange={(e) =>
                    setNewBook({ ...newBook, bookHref: e.currentTarget.value })
                  }
                  type="text"
                  name="linkTitle"
                  minLength="1"
                  maxLength="25"
                  placeholder="Discover Your Next Adventure"
                />
              </div>
              <div>
                <label for="linkHref" className="FormLabel">
                  Enter a Your bookname
                </label>
                <input
                  value=""
                  onChange={(e) => setNewBook(e.target.value)}
                  type="text"
                  name="linkhref"
                  minLength="7"
                  placeholder="https://example.com/"
                />
              </div>
              <button onClick={() => createBookShelf(newBook)}>
                Add to Bookcase
              </button>
            </form>
            <NewBooks/>
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

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
