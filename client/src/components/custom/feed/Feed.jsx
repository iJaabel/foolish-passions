import React, { useEffect } from "react";
import { Share, Post } from "../../../components";
import { getProfilePosts, getTimelinePosts } from "../../../app";
import "./Feed.css";

// takes in user name and returns a feed with all post

/**
 * Takes in a parameter to toggle between timeline feed or profile
 * data should be handled in it's container
 * this component must not have any network calls 
 * nor getState commands. data get's passed down
 */

export default function Feed({ username, data }) {

  const renderFeedPosts = data.map((p) => {
    if ((p !== undefined || null || NaN)) {
      return <Post key={p._id} post={p} />;
    }
    return p
  });

  useEffect(() => {
    if (username) {
      // these are network calls that should be in state already
      //all data in state should be passed down
      getProfilePosts(username);
    } else {
      getTimelinePosts();
    }
  }, [username]);

  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Share />
        {renderFeedPosts}
      </div>
    </div>
  );
}
