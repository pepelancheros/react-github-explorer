import "./search.scss";
import { useState } from "react";

export default function Search(props) {
  const [searchText, setSearchText] = useState("");

  function handleChange(event) {
    setSearchText(event.target.value);
  }

  return (
    <div className="search">
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
      <button
        className="search__button"
        onClick={() => props.setAPIText(searchText)}
      >
        Search
      </button>
    </div>
  );
}
