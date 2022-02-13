import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { getUserById } from "../../../app";
import { MoreVert } from "@material-ui/icons";
import moment from "moment";
import "./Post.css";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLike] = useState(false);

  const { userId } = post;
  console.log("what is in the post pass down?:\n", post)

  const lib = useSelector((state) => state.user.lib);
  const userWhoPosted = lib.filter((user) => user.userId === userId)
  console.log("userWhoPosted:\n", userWhoPosted)
  console.log("libs:\n", lib)

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLike(!isLiked);
  };

    return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${userWhoPosted.username}`}>
              <img
                className="postProfileImg"
                src={userWhoPosted.profilePicture || "/no-avatar.png"}
                alt="post profile"
              />
            </Link>
            <span className="postUsername">{userWhoPosted.username}</span>
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
              {post.comments?.length} Comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
