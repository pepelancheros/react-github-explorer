import "./navbar.scss";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [showNavModal, setshowNavModal] = useState(false);

  function handleHamburgerClick() {
    setshowNavModal((prevState) => !prevState);
  }

  return (
    <div className="navbar__container">
      <div className="navbar navbar__desktop">
        <Link to="/">
          <h1 className="logo-link">GitHub Explorer</h1>
        </Link>
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/explorer">Explorer</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
      <div className="navbar navbar__mobile">
        <button
          className="navbar__hamburger"
          onClick={() => handleHamburgerClick()}
        >
          <span className="material-symbols-rounded">menu</span>
        </button>
        <Link to="/">
          <h1 className="logo-link">GitHub Explorer</h1>
        </Link>
        {showNavModal && (
          <div className="navbar__modal links">
            <NavLink onClick={() => handleHamburgerClick()} to="/">
              Home
            </NavLink>
            <NavLink onClick={() => handleHamburgerClick()} to="/explorer">
              Explorer
            </NavLink>
            <NavLink onClick={() => handleHamburgerClick()} to="/about">
              About
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
