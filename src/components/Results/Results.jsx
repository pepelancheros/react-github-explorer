import "./results.scss";
import RepoInfo from "../RepoInfo/RepoInfo";
import { useState, useEffect } from "react";
import RepoDetails from "../RepoDetails/RepoDetails";

export default function Results(props) {
  const [currentRepo, setCurrentRepo] = useState(null);

  const results = props.resultsArray.map((repo) => {
    return (
      <button
        key={repo.id}
        className="repository-information__container"
        onClick={() => setCurrentRepo(repo)}
      >
        <RepoInfo
          name={repo.name}
          owner={repo.owner}
          stars={repo.stargazers_count}
          forks={repo.forks}
          description={repo.description}
        ></RepoInfo>
      </button>
    );
  });
  const details = (
    <RepoDetails
      currentRepo={currentRepo}
      handleGoBack={() => setCurrentRepo(null)}
    />
  );
  const initialState = (
    <p className="initial-results-text">
      Type a keyword of the repository you want to find in the above search bar
    </p>
  );

  function getDetails() {
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
    <div className="results">
      {currentRepo ? details : results.length ? results : initialState}
    </div>
  );
}
