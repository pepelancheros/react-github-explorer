import "./assets/styles/generic-styles.scss";
import Sort from "./components/Sort/Sort";
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";

function App() {
  return (
    <>
      <div className="page">
        <h1 className="page-title">GitHub Explorer</h1>
        <div className="explorer">
          <Search></Search>
          <Sort></Sort>
          <Results></Results>
        </div>
      </div>
    </>
  );
}

export default App;
