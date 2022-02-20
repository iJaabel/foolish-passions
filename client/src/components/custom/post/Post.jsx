import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserById } from "../../../app";
import { MoreVert } from "@material-ui/icons";
import moment from "moment";
import "./post.css";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLike] = useState(false);

  const { userId } = post;
  console.log("what is in the post pass down?:\n", post)

  const userDataIsPending = useSelector((state) => state.user.pending);
  const userWhoPosted = useSelector((state) => state.user.data);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLike(!isLiked);
  };

  useEffect(() => {
    getUserById(userId);
  }, [userId]);

  // useEffect(
  //   () =>
  //     console.log(
  //       "on mount in post component, we see the post object:\n",
  //       post,
  //       "\n and we take a look at the user:\n",
  //       userWhoPosted
  //     ),
  //   [post, userWhoPosted]
  // );

  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${userDataIsPending ? null : userWhoPosted.username}`}>
              <img
                className="postProfileImg"
                src={userDataIsPending ? null : userWhoPosted.profilePicture || "/no-avatar.png"}
                alt="post profile"
              />
            </Link>
            <span className="postUsername">{userDataIsPending ? null : userWhoPosted.username}</span>
            <span className="postDate">{moment(post.createdAt).fromNow()}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.body || post?.desc}</span>
          {/* <img className="postImg" src={post?.img} alt="in post" /> */}
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
              {post.comments.length} Comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
