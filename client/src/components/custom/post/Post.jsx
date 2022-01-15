import React, { useState } from "react";
import "./Post.css";
import { MoreVert } from "@material-ui/icons";
// https://youtu.be/zM93yZ_8SvE?t=5214
// https://youtu.be/pFHyZvVxce0?t=1648

export default function Post({ post }) {
  // useEffect(() => {}, []);
  const [like, setLike] = useState(post.likes.length);
  const [isLike, setIsLike] = useState(false);

  const likeHandler = () => {
    setLike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);
  };

  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={post.userId[0].image || "/no-avatar.png"}
              alt="post profile"
            />
            <span className="postUsername">
              {post.userId[0].username}
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
              {post.comments.length} Comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
