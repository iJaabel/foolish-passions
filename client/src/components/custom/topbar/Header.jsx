import React from "react";
import { Link } from "react-router-dom";
import "./header.css"

export default () => {
  return (
    <>
      <header className="">
        {/* Nav */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            <h1 className="title">
              <span className="word">
                <span className="letter">F</span>
                <span className="letter">o</span>
                <span className="letter">o</span>
                <span className="letter">l</span>
                <span className="letter">i</span>
                <span className="letter">s</span>
                <span className="letter">h</span>
              </span>
              <span className="whitespace"> </span>
              <span className="word">
                <span className="letter">P</span>
                <span className="letter">a</span>
                <span className="letter">s</span>
                <span className="letter">s</span>
                <span className="letter">i</span>
                <span className="letter">o</span>
                <span className="letter">n</span>
                <span className="letter">s</span>
              </span>
            </h1>
            <h3 className="subtitle">
              <span className="word">Your</span>
              <span className="whitespace"> </span>
              <span className="word">place</span>
              <span className="whitespace"> </span>
              <span className="word">for</span>
              <span className="whitespace"> </span>
              <span className="word">dance</span>
              <span className="whitespace"> </span>
              <span className="word">education</span>
            </h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/video">
                  Videos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              >
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </input>
            </form> */}
          </div>
        </nav>
        {/* Nav END */}
      </header>
    </>
  );
};
