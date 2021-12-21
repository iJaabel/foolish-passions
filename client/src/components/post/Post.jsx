import React from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";

export default function Post() {
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
            <span className="postUsername">Julia</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            This is my first post on this platform!
          </span>
          <img
            className="postImg"
            src="https://randomuser.me/api/portraits/lego/6.jpg"
            alt="in post"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="" alt="" />
            <img src="" alt="" />
            <span className="postLikeCounter">
              <b className="postLikePeople">32 people</b> liked this post
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">4 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
