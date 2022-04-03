import React from "react";

const Search = (props) => {
  const { keyword, setKeyword, findBook } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    findBooks(keyword);
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p style={{ color: "red" }}>
          <em>{keyword && "Keywords Typed: " + keyword}</em>
        </p>

        <label>Search</label>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
export default Search;
