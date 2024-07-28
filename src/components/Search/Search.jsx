import "./search.scss";
import { useState } from "react";

export default function Search() {
  const [searchText, setSearchText] = useState("");

  function handleChange(event) {
    setSearchText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("searchText", searchText);
  }

  return (
    <div>
      <form className="search" onSubmit={handleSubmit}>
        <label htmlFor="search" className="search__label">
          Search
        </label>
        <input
          id="search"
          type="text"
          className="search__input"
          placeholder="search for a repository"
          onChange={handleChange}
        ></input>
        <button className="search__button">Search</button>
      </form>
    </div>
  );
}
