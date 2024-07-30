import "./repoDetails.scss";

export default function RepoDetails(props) {
  return (
    <div className="details">
      <button onClick={props.handleGoBack} className="details__close-button">
        <span className="material-symbols-rounded">close</span>
      </button>
      <div className="details__main-info">
        <p className="details__name">
          Repository:{" "}
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
        <p>{props.currentRepo.contributor?.login}</p>
      </div>
    </div>
  );
}
