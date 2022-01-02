import React from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";
import { Posts, Comments } from "../../dummy/data";

export default function Feed() {
  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Share />
        {Posts.map((data) => (
          <Post key={data.id} post={data} comments={Comments} />
        ))}
      </div>
    </div>
  );
}
