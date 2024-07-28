import "./results.scss";

export default function Results(props) {
  const results = props.resultsArray.map((repo) => {
    return <p key={repo.id}>{repo.name}</p>;
  });
  return <div className="results">{results}</div>;
}
