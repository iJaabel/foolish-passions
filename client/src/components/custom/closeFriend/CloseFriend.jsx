import React from "react";
import "./CloseFriend.css";

export default ({ user }) => (
  <li className="leftbarFriend">
    <img className="leftbarFriendImg" src={user.image} alt="a close friend" />
    <span className="leftbarFriendName">{user.username}</span>
  </li>
)
