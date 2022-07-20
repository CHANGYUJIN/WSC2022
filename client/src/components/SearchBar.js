import React, {useState} from "react";
import "../static/css/SearchBarStyle.css";

const SearchBar = (props) => {
  const[keyword, setKeyword] = useState("");
  const classes = "search " + props.className;

  const searchKeyword = (e) => {
    setKeyword(e.target.value);
    console.log(keyword);
  };

  const sendKeyword = (e) => {
    e.preventDefault();
    props.getKeyword(keyword);
    setKeyword("");
  }
  
  return (
    <>
    <div className="search-container">
    <form className={classes} onSubmit={e => sendKeyword(e)}>
      <input
        className="searchBox"
        type="text"
        value={keyword}
        placeholder={props.placeholder}
        onChange={searchKeyword}
      />
      <button className="search-btn" type="submit" />
    </form>
    <div className="css-purpose">
    </div>
    </div>
    </>
  );
};

export default SearchBar;
