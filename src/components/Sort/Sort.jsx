import "./sort.scss";

export default function Sort() {
  return (
    <div>
      <div class="sort">
        <p class="sort__description-text">sort by:</p>
        <div class="sort__elements-container">
          <div class="sort__element">
            <p class="sort__element-text">stars</p>
            <button class="sort__button">
              <span class="material-symbols-outlined">keyboard_arrow_up</span>
            </button>
            <button class="sort__button">
              <span class="material-symbols-outlined">keyboard_arrow_down</span>
            </button>
          </div>
          <div class="sort__element">
            <p class="sort__element-text">forks</p>
            <button class="sort__button">
              <span class="material-symbols-outlined">keyboard_arrow_up</span>
            </button>
            <button class="sort__button">
              <span class="material-symbols-outlined">keyboard_arrow_down</span>
            </button>
          </div>
          <div class="sort__element">
            <p class="sort__element-text">updated</p>
            <button class="sort__button">
              <span class="material-symbols-outlined">keyboard_arrow_up</span>
            </button>
            <button class="sort__button">
              <span class="material-symbols-outlined">keyboard_arrow_down</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
