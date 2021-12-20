import React from "react";
import { PermMedia } from "@material-ui/icons";
import "./share.css";

export default function Share() {
  return (
    <div className="shareContainer">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="https://randomuser.me/api/portraits/women/91.jpg"
            alt="sharing profile"
          />
          <input placeholder="What's on your mind?" className="shareInput" />
        </div>
        <hr className="shareLine" />
        <div className="shareBottom">
          <div className="shareOption">
            <PermMedia className="shareIcon" />
            <span className="sharedOptionText">Photo or Video</span>
          </div>
        </div>
      </div>
    </div>
  );
}
