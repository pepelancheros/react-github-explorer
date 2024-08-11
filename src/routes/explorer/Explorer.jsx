import Sort from "../../components/Sort/Sort";
import Search from "../../components/Search/Search";
import Results from "../../components/Results/Results";
import Paginator from "../../components/Paginator/Paginator";
import { useState, useEffect } from "react";
import "./explorer.scss";

export default function Explorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortQuery, setSortQuery] = useState(undefined);
  const [pageNumber, setPageNumber] = useState(1);
  const [results, setResults] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    getSearchResult();
  }, [searchQuery, sortQuery, pageNumber]);

  function setAPIText(query) {
    setSearchQuery(query);
  }

  function setAPISortOrder(newSort) {
    setSortQuery(newSort);
  }

  function setPageQuery(number) {
    setPageNumber(number);
  }

  function getSearchResult() {
    if (searchQuery) {
      const endpoint = "https://api.github.com/search/repositories";
      const pagination = "&per_page=10" + "&page=" + pageNumber;
      const sortQueries = sortQuery
        ? `&sort=${sortQuery.element}&order=${sortQuery.order}`
        : "";
      const endpointWithQueries =
        endpoint + "?q=" + searchQuery + pagination + sortQueries;

      fetch(endpointWithQueries)
        .then((res) => res.json())
        .then((data) => {
          setResults(data.items);
          setTotalItems(data.total_count);
        });
    }
  }

  return (
    <div className="explorer">
      <Search setAPIText={setAPIText}></Search>
      <Sort setAPISortOrder={setAPISortOrder}></Sort>
      <Results resultsArray={results}></Results>
      <Paginator
        totalItems={totalItems}
        setPageNumber={setPageQuery}
      ></Paginator>
    </div>
  );
}
