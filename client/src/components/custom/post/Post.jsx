import React, { useState, useEffect } from "react";
import "./Post.css";
import { MoreVert } from "@material-ui/icons";
// import { Users, Comments } from "../../../dummy/data";
// import { getUser } from "../../../app";
// https://youtu.be/zM93yZ_8SvE?t=5214
// https://youtu.be/pFHyZvVxce0?t=1648

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLike, setIsLike] = useState(false);
  // const [user, setUser] = useState();

  useEffect(
    () =>
      console.log(
        "useEffect in <Post /> component dependant on like state:\n",
        like,
        "and isLike state:\n",
        isLike
      ),
    [like, isLike]
  );

  // useEffect(() => {
  //   const data = getUser();
  //   setUser(data);
  // }, []);

  // --- ---

  const likeHandler = () => {
    setLike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);
  };

  const findUser = (userIdIAmLookingFor) => {
    const foundUser = Users.filter((u) => u.id === userIdIAmLookingFor);
    if (foundUser === undefined || null || NaN || 0 || false) {
      console.log("no user found");
      return;
    }
    return foundUser;
  };

  const findPostComments = (commentsPostIdIAmLookingFor) => {
    const foundComments = Comments.filter(
      (c) => c.postId === commentsPostIdIAmLookingFor
    );
    if (!foundComments) {
      console.log("no comments found");
      return;
    }
    return foundComments;
  };
  // console.log(`findPostComment: \n`, findPostComments(post?.id));

  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={findUser(post.userId)[0].image || "/no-avatar.png"}
              alt="post profile"
            />
            <span className="postUsername">
              {findUser(post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.body}</span>
          <img className="postImg" src={post?.img} alt="in post" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="https://media.giphy.com/media/URxmJywZU1J47gdhSV/giphy.gif"
              onClick={likeHandler}
              alt="nice icon"
            />
            <img
              className="likeIcon"
              src="https://media.giphy.com/media/hrXV1CvTk55kguYmUu/giphy.gif"
              onClick={likeHandler}
              alt="amazing icon"
            />
            <span className="postLikeCounter">
              <b className="postLikePeople">{like} people</b> liked this post
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">
              {findPostComments(post.id).length} Comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

