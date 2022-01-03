import React from "react";
import "./closeFriend.css";

export default function CloseFriend() {
  return (
    <li className="leftbarFriend">
      <img
        className="leftbarFriendImg"
        src="https://randomuser.me/api/portraits/women/20.jpg"
        alt=""
      />
      <span className="leftbarFriendName">Jane</span>
    </li>
  );
}
