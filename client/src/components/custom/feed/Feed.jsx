import React from "react";
import { Share, Post } from "../..";
import "./Feed.css";

// takes in user name and returns a feed with all post

/**
 * Takes in a parameter to toggle between timeline feed or profile
 * data should be handled in it's container
 * this component must not have any network calls 
 * nor getState commands. data get's passed down
 */

export default function Feed({ username, data }) {
  const handleFeed = () => {
    console.log("\nwhat's in username?\n\n", username)
    if (username) return

    console.log("\nwhat's in data?\n\n", data)
    if (data === undefined || null || NaN) return

    const renderFeedPosts = data.map((p) => p === undefined || null || NaN ? null : <Post key={p._id} post={p} />)
    console.log("\nwhat is in renderFeedPosts?\n\n", renderFeedPosts)
    return renderFeedPosts
  }

  const postArr = handleFeed()
  console.log("\nwhat is postArr?\n\n", postArr)
  // useEffect(() => {
  // }, [])

  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Share />
        {postArr}
      </div>
    </div>
  );
}
