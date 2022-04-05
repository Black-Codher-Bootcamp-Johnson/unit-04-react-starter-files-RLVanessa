import Header from "./Header";
// import BookList from "./BookList";

const HomePage = (props) => {
  const { books, addBook } = props;
  return (
    <>
      <Header />
      <h2>Welcome to the Bookcase App</h2>
      {/* <BookList books={books} addBook={addBook}></BookList> */}
    </>
  );
};

export default HomePage;
