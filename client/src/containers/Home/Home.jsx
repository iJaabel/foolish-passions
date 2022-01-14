import React from "react";
import { Header as Topbar, Leftbar, Rightbar, Feed } from "../../components";
import "./home.css";

export default () => (
  <>
    <Topbar />
    <div className="homeContainer">
      <Leftbar />
      <Feed />
      <Rightbar />
    </div>
  </>
);
