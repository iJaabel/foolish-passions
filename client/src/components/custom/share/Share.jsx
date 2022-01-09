import React from "react";
import { PermMedia, Room, Label, EmojiEmotions } from "@material-ui/icons";
import "./Share.css";

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
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="sharedOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="sharedOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="sharedOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="sharedOptionText">Feeling</span>
            </div>
            <button className="shareButton">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}
