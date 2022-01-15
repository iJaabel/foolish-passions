import React from "react";
import { getPosts, getUser, store } from "../../../app";
import { Share, Post } from "../../../components";
import "./Feed.css";

export default function Feed() {
  getPosts();
  getUser()
  const state = store.getState();
  const data = state.post.data;

  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Share />
        {data.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
