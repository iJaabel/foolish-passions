import React from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";

export default function Post({ post, comments }) {
  console.log(`post data:\n`, post, `comments data:\n`, comments);
  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="https://randomuser.me/api/portraits/women/96.jpg"
              alt="post profile"
            />
            <span className="postUsername">Username Placeholder</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.body}</span>
          <img
            className="postImg"
            src={post?.img}
            alt="in post"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="https://media.giphy.com/media/URxmJywZU1J47gdhSV/giphy.gif"
              alt="nice icon"
            />
            <img
              className="likeIcon"
              src="https://media.giphy.com/media/hrXV1CvTk55kguYmUu/giphy.gif"
              alt="amazing icon"
            />
            <span className="postLikeCounter">
              <b className="postLikePeople">{post.reactions} people</b> liked
              this post
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">
              {comments.reduce((accu, items) => accu + items.total, 0)} Comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// https://youtu.be/zM93yZ_8SvE?t=5214