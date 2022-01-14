import React, { useState, useEffect } from "react";
import { getPosts } from "../../../app";
import { Share, Post } from "../../../components";
import "./Feed.css";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const data = getPosts();

  // useEffect(
  //   () =>
  //     console.log(
  //       "useEffect from Feed, dependant on it's state:\n",
  //       posts,
  //       "\nintended to retreive post fromn DB and save as state"
  //     ),
  //   [posts]
  // );

  useEffect(() => {
    // console.log("useEffect that renders once in Feed");
    // console.log("useEffect in Feed when getPost is called: \n", data);
    setPosts(data);
  }, []);

  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Share />
        {posts.map((data) => (
          <Post key={data.id} post={data} />
        ))}
      </div>
    </div>
  );
}
