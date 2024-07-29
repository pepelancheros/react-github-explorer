import "./repoInfo.scss";

export default function RepoInfo(props) {
  return (
    <div className="repository-information">
      <div className="repository-information__main-info">
        <p className="repository-information__name">
          {props.name} - by {props.owner?.login}
        </p>
        <div className="repository-information__rating">
          <div className="repository-information__rating-info">
            <p className="repository-information__stars">
              {props.stars} <span class="material-symbols-rounded">star</span>
            </p>
          </div>
          <p className="repository-information__rating-info">
            {props.forks} forks
          </p>
        </div>
      </div>
      <p className="repository-information__description">{props.description}</p>
    </div>
  );
}
