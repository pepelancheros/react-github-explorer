import "./assets/styles/generic-styles.scss";
import Sort from "./components/Sort/Sort";
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import { useState, useEffect } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    getSearchResult();
  }, [searchQuery]);

  function setAPIText(query) {
    setSearchQuery(query);
  }

  function getSearchResult() {
    const endpoint = "https://api.github.com/search/repositories";
    if (searchQuery) {
      fetch(endpoint + "?q=" + searchQuery)
        .then((res) => res.json())
        .then((data) => setResults(data.items));
    }
  }

  return (
    <>
      <div className="page">
        <h1 className="page-title">GitHub Explorer</h1>
        <div className="explorer">
          <Search setAPIText={setAPIText}></Search>
          <Sort></Sort>
          <Results resultsArray={results}></Results>
        </div>
      </div>
    </>
  );
}

export default App;
