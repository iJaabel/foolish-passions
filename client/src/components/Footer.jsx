import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <>
    <footer className="fixed-bottom bg-fp-darker-blue-25">
      <h2 className="text-fp-yellow">Hello from the Footer</h2>
      <div className="">
        <Link to="/contact">Contact</Link>
        <Link to="/">Home</Link>
      </div>
    </footer>
  </>
);
