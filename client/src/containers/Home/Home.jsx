import React from "react";
import { useSelector } from "react-redux";
import { Header as Topbar, Leftbar, Rightbar, Feed } from "../../components";
import "./home.css";

export default () => {
  const data = useSelector((state) => state.user.posts.timeline);
  const isPending = useSelector((state) => state.post.pending);

  return (
  <>
    <Topbar />
    <div className="homeContainer">
      <Leftbar />
      {isPending ? null : <Feed data={data} />}
      <Rightbar />
    </div>
  </>
)}