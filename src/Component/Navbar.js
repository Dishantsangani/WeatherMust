import React from "react";
import "../App.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg Nav ">
        <div className="container-fluid">
          <a className="navbar-brand Resnav" href="/">
            Weather Mast
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse  " id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex justify-content-start align-items-start ">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link active" aria-current="page" href="/about">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
