import "./repoDetails.scss";
import { useState, useEffect } from "react";

export default function RepoDetails(props) {
  const [contributors, setContributors] = useState([]);
  const contributorsHtml = contributors.map((contributor) => (
    <p className="details__contributor-name" key={contributor.id}>
      {contributor.login}
    </p>
  ));

  useEffect(() => {
    getContributors();
  }, []);

  function getContributors() {
    fetch(props.currentRepo.contributors_url)
      .then((res) => res.json())
      .then((data) => setContributors(data));
  }

  return (
    <div className="details">
      <div className="details__header">
        <button
          onClick={props.handleGoBack}
          className="details__go-back-button"
        >
          <span class="material-symbols-rounded">arrow_back</span>Go back
        </button>
        <h2 className="details__title">Repository details</h2>
        <button onClick={props.handleGoBack} className="details__close-button">
          <span className="material-symbols-rounded">close</span>
        </button>
      </div>
      <div className="details__main-info">
        <p className="details__name">
          <a target="_blank" rel="noopener" href={props.currentRepo.html_url}>
            {props.currentRepo.name}
          </a>
        </p>
        <p>
          Owner:{" "}
          <a
            target="_blank"
            rel="noopener"
            href={props.currentRepo.owner?.html_url}
          >
            {props.currentRepo.owner?.login}
          </a>
        </p>
      </div>
      <p className="details__date">
        Last Updated on: {props.currentRepo.updated_at}
      </p>
      <div className="details__contributors">
        <p className="details__contributors-title">contributors:</p>
        {contributorsHtml}
      </div>
    </div>
  );
}
