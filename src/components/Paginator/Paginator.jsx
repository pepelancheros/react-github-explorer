import "./paginator.scss";
import { useState } from "react";

export default function Paginator(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(props.totalItems / 10);
  const pagesNumbers = Array.from(
    { length: Math.min(totalPages, 5) },
    (_, i) => i + 1
  );

  function handleNumberClick(number) {
    props.setPageNumber(number);
    setCurrentPage(number);
  }

  function handleBackClick() {
    setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
    props.setPageNumber(currentPage - 1);
  }

  function handleForwardClick() {
    setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
    props.setPageNumber(currentPage + 1);
  }

  const numbersHtml = (
    <ul className="paginator__numbers-container">
      {pagesNumbers.map((page) => (
        <li key={page} className="paginator__number-container">
          <button
            className={`paginator__number ${
              page === currentPage ? "paginator__number--active" : ""
            }`}
            onClick={() => handleNumberClick(page)}
          >
            {page}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {!!pagesNumbers.length && (
        <div className="paginator">
          <button
            onClick={() => handleBackClick()}
            className={`paginator__arrow-button ${
              currentPage === 1 ? "paginator__arrow-button--disabled" : ""
            }`}
          >
            <span className="material-symbols-rounded">arrow_back_ios</span>
          </button>
          {numbersHtml}
          <button
            onClick={() => handleForwardClick()}
            className={`paginator__arrow-button ${
              currentPage === pagesNumbers.length
                ? "paginator__arrow-button--disabled"
                : ""
            }`}
          >
            <span className="material-symbols-rounded">arrow_forward_ios</span>
          </button>
        </div>
      )}
    </div>
  );
}
