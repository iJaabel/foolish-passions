import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img className="d-block" src="../icons/FP-icon-128.png" />
      </Link>
    </div>
  );
};
