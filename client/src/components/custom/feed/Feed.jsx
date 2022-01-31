import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getProfilePosts, getTimelinePosts, getUser } from "../../../app";
import { Share, Post } from "../../../components";
import "./Feed.css";

export default function Feed({ username }) {
  const data = useSelector((state) => state.post.data);
  const isPending = useSelector((state) => state.post.pending);

  const renderFeedPosts = data.map((p) => {
    if ((p !== undefined || null || NaN)) {
      return <Post key={p._id} post={p} />;
    }
    return p
  });

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    username ? getProfilePosts(username) : getTimelinePosts();
  }, [username]);

  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Share />
        {isPending ? null : renderFeedPosts}
      </div>
    </div>
  );
}
