import "./results.scss";
import RepoInfo from "../RepoInfo/RepoInfo";

export default function Results(props) {
  const results = props.resultsArray.map((repo) => {
    return (
      <RepoInfo
        key={repo.id}
        name={repo.name}
        owner={repo.owner}
        stars={repo.stargazers_count}
        forks={repo.forks}
        description={repo.description}
      ></RepoInfo>
    );
  });
  return <div className="results">{results}</div>;
}
