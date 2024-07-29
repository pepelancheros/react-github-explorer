import "./assets/styles/generic-styles.scss";
import Sort from "./components/Sort/Sort";
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import { useState, useEffect } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortQuery, setSortQuery] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    getSearchResult();
  }, [searchQuery]);

  function setAPIText(query) {
    setSearchQuery(query);
  }

  function setAPISortOrder(elementToSort) {
    setSortQuery((prevSortQuery) => {
      if (prevSortQuery.length === 0) {
        return [elementToSort];
      } else {
        return prevSortQuery.map((prevSortedElement) => {
          console.log(
            "prevSortedElement",
            prevSortedElement,
            "elementToSort",
            elementToSort
          );
          // if (prevSortedElement.element === sortQuery.element) {
          return [...prevSortedElement, elementToSort];
          //     console.log(
          //       "prevSortedElement",
          //       prevSortedElement,
          //       "sortQuery",
          //       sortQuery
          //     );
          // }
        });
      }
    });
  }

  function getSearchResult() {
    const endpoint = "https://api.github.com/search/repositories";
    const pagination = "&page=1&per_page=10";
    if (searchQuery) {
      fetch(endpoint + "?q=" + searchQuery + pagination)
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
          <Sort setAPISortOrder={setAPISortOrder}></Sort>
          <Results resultsArray={results}></Results>
        </div>
      </div>
    </>
  );
}

export default App;
