import "./search.scss";

export default function Search() {
  return (
    <div>
      <form class="search">
        <label htmlFor="search" className="search__label">
          Search
        </label>
        <input
          id="search"
          type="text"
          class="search__input"
          placeholder="search for a repository"
        ></input>
        <button class="search__button">Search</button>
      </form>
    </div>
  );
}
