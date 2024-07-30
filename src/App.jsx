import "./assets/styles/generic-styles.scss";
import Sort from "./components/Sort/Sort";
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import { useState, useEffect } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortQuery, setSortQuery] = useState(undefined);
  const [results, setResults] = useState([]);

  useEffect(() => {
    getSearchResult();
  }, [searchQuery, sortQuery]);

  function setAPIText(query) {
    setSearchQuery(query);
  }

  function setAPISortOrder(newSort) {
    setSortQuery(newSort);
  }

  function getSearchResult() {
    if (searchQuery) {
      const endpoint = "https://api.github.com/search/repositories";
      const pagination = "&page=1&per_page=10";
      const sortQueries = sortQuery
        ? `&sort=${sortQuery.element}&order=${sortQuery.order}`
        : "";
      const endpointWithQueries =
        endpoint + "?q=" + searchQuery + pagination + sortQueries;

      fetch(endpointWithQueries)
        .then((res) => res.json())
        .then((data) => setResults(data.items));
    }
  }

  return (
    <>
      (
      <div className="page">
        <h1 className="page-title">GitHub Explorer</h1>
        <div className="explorer">
          <Search setAPIText={setAPIText}></Search>
          <Sort setAPISortOrder={setAPISortOrder}></Sort>
          <Results resultsArray={results}></Results>
        </div>
      </div>
      )
    </>
  );
}

export default App;
