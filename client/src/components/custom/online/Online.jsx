import React from "react";
import "./Online.css";

export default function Online({ user }) {
  return (
    <li className="rightbarFriends">
      <div className="rightbarProfileImgContainer">
        <img
          className="rightbarProfileImg"
          src={user.image}
          alt="user is online"
        />
        <span className="rightbarOnlineBadge"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}
