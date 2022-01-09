import React from "react";
import Topbar from "../../components/custom/Header/HeaderV3";
import Leftbar from "../../components/custom/Sidebars/Leftbar";
import Rightbar from "../../components/custom/Sidebars/Rightbar";
import Feed from "../../components/custom/Feed/Feed";
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
