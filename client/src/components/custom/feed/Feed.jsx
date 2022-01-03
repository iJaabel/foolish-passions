import React from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";
import { Posts } from "../../dummy/data";

export default function Feed() {
  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Share />
        {Posts.map((data) => (
          <Post key={data.id} post={data} />
        ))}
      </div>
    </div>
  );
}
