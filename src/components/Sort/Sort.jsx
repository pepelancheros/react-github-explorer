import "./sort.scss";

export default function Sort(props) {
  function handleSort(element, order) {
    props.setAPISortOrder({ element: element, order: order });
  }

  return (
    <div>
      <div className="sort">
        <p className="sort__description-text">sort by:</p>
        <div className="sort__elements-container">
          <div className="sort__element">
            <p className="sort__element-text">stars</p>
            <button
              className="sort__button"
              onClick={() => handleSort("stars", "up")}
            >
              <span className="material-symbols-rounded">
                keyboard_arrow_up
              </span>
            </button>
            <button
              className="sort__button"
              onClick={() => handleSort("stars", "down")}
            >
              <span className="material-symbols-rounded">
                keyboard_arrow_down
              </span>
            </button>
          </div>
          <div className="sort__element">
            <p className="sort__element-text">forks</p>
            <button className="sort__button">
              <span className="material-symbols-rounded">
                keyboard_arrow_up
              </span>
            </button>
            <button className="sort__button">
              <span className="material-symbols-rounded">
                keyboard_arrow_down
              </span>
            </button>
          </div>
          <div className="sort__element">
            <p className="sort__element-text">updated</p>
            <button className="sort__button">
              <span className="material-symbols-rounded">
                keyboard_arrow_up
              </span>
            </button>
            <button className="sort__button">
              <span className="material-symbols-rounded">
                keyboard_arrow_down
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
