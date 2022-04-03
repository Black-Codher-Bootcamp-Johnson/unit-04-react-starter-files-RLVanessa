import React, { useState } from "react";
import BookList from "./components/BookList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import HomePage from "./components/HomePage";
import bookdata from "./models/books.json";

const App = () => {
  const [keyword, setKeyword] = useState("");
  const [books, setBooks] = useState(bookdata);
  function addBook(title) {
    console.log(`The Book ${title} was
   clicked`);
  }

  async function findBook(keyword) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&print-type=books&projection=lite`;
    const results = await fetch(url).then((res) => res.json());
    setBooks(results.items);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(keyword);
    findBook(keyword);
  };

  return (
    <Router>
      <>
        <Search
          setKeyword={setKeyword}
          keyword={keyword}
          handleSubmit={handleSubmit}
        />
        <BookList books={books} />
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage books={books} addBook={addBook}></HomePage>}
          />
          {/* <Route
          path="/bookcase"
          element={<BookcasePage books={books} addBook={addBook}></BookcasePage>}
        /> */}
          {/* <Route path="/about" element={<AboutUsPage />} /> */}
        </Routes>
      </>
    </Router>
  );
};
export default App;
