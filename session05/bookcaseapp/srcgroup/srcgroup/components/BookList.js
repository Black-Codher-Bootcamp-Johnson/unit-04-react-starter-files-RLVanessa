import React, { useState } from "react";
import Book from "./Book.js";

function BookList(props) {
  console.log("BookList props", props);
  return props.books.map((bookItem) => (
    <Book book={bookItem} addBook={props.addBook} />
  ));
}

export default BookList;
