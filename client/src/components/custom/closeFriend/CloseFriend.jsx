import React from "react";
import "./closeFriend.css";

export default function CloseFriend({ user }) {
  return (
    <li className="leftbarFriend">
      <img className="leftbarFriendImg" src={user.image} alt="a close friend" />
      <span className="leftbarFriendName">{user.username}</span>
    </li>
  );
}
