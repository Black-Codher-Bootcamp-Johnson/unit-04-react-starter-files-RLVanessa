import react from 'react';
import './Pages/Home.css';
const Home = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyCMngVg8Ra0RTG-fsXcw69fuohnTToVbpk"
        )
        .then((res) => console.log(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            <b>Where there is love</b>There is no darkness
          </h1>
        </div>
        <div className="row2">
          <h2>Discover Your Next Adventure</h2>
          <div className="search">
            <input type="text" placeholder="Enter the name of your book" />
            value={search} onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchBook}/>
            <button>
              <i class="fas fa-search"></i>
            </button>
          </div>
          <img src="./src/bk.png" alt="blacklove" />
        </div>
      </div>
    </>
  );
};
export default Home;
