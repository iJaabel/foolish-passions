import React from "react";
import Topbar from "../../components/topbar/HeaderV3";
import Leftbar from "../../components/sidebar/Leftbar";
import Rightbar from "../../components/sidebar/Rightbar";
import Feed from "../../components/feed/Feed";
import "./home.css"

export default function home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
