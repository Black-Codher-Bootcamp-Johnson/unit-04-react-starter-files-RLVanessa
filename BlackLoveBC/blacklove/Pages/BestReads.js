import react from "react";
import './Pages/BestReads.css';
import './src/br.png';

const BestBooks = (props) => {
        const linkImageStyle = {
          backgroundImage: "url(/src/books.png)",
        };
      
        const mappedData = props.BestBooks.map((book, i) => {
          return;
          <div key={i} className="bestBooks">
            <div className="bestBookImage" style={bookImageStyle} />
            <div className="bestBookLink">
              <h2>
                <a href="#">{book.linkHref}</a>
              </h2>
            </div>
          </div>;
        });
      
        return <Fragment>{mappedData}</Fragment>;
      };
      export default bestBooks;