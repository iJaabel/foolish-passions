import React, { useEffect } from "react";
import Share from "../Share/Share";
// import Post from "../Post/Post";
import { getPosts } from "../../../app";
import "./Feed.css";

export default function Feed() {
  // const [posts, setPosts] = useState();

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
    console.log("useEffect that renders once in Feed");
    const data = getPosts();
    console.log("useEffect in Feed when getPost is called: \n", data);
    // setPosts(data);
  }, []);

  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Share />
        {/* {posts || posts.map((data) => <Post key={data.id} post={data} />)} */}
      </div>
    </div>
  );
}
