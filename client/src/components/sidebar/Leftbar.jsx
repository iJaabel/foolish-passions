import React from "react";
import "./leftbar.css";
import { RssFeed, WorkOutline, Event, Chat } from "@material-ui/icons";

export default () => {
  return (
    <div className="leftbarContainer">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeed className="leftbarIcon" />
            <span className="leftbarListItemText">Seek Partner</span>
          </li>
          <li className="leftbarListItem">
            <Chat className="leftbarIcon" />
            <span className="leftbarListItemText">Messeges</span>
          </li>
          <li className="leftbarListItem">
            <Event className="leftbarIcon" />
            <span className="leftbarListItemText">Events</span>
          </li>
          <li className="leftbarListItem">
            <WorkOutline className="leftbarIcon" />
            <span className="leftbarListItemText">Teachers</span>
          </li>
        </ul>
        <button className="leftbarShowMore">Show More</button>
        <hr className="leftbarLine" />
        <ul className="leftbarFriendList">
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="https://randomuser.me/api/portraits/women/20.jpg" alt="" />
            <span className="leftbarFriendName">Jane</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="https://randomuser.me/api/portraits/women/20.jpg" alt="" />
            <span className="leftbarFriendName">Jane</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="https://randomuser.me/api/portraits/women/20.jpg" alt="" />
            <span className="leftbarFriendName">Jane</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="https://randomuser.me/api/portraits/women/20.jpg" alt="" />
            <span className="leftbarFriendName">Jane</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="https://randomuser.me/api/portraits/women/20.jpg" alt="" />
            <span className="leftbarFriendName">Jane</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="https://randomuser.me/api/portraits/women/20.jpg" alt="" />
            <span className="leftbarFriendName">Jane</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="https://randomuser.me/api/portraits/women/20.jpg" alt="" />
            <span className="leftbarFriendName">Jane</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="https://randomuser.me/api/portraits/women/20.jpg" alt="" />
            <span className="leftbarFriendName">Jane</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="https://randomuser.me/api/portraits/women/20.jpg" alt="" />
            <span className="leftbarFriendName">Jane</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="https://randomuser.me/api/portraits/women/20.jpg" alt="" />
            <span className="leftbarFriendName">Jane</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="https://randomuser.me/api/portraits/women/20.jpg" alt="" />
            <span className="leftbarFriendName">Jane</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="https://randomuser.me/api/portraits/women/20.jpg" alt="" />
            <span className="leftbarFriendName">Jane</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="https://randomuser.me/api/portraits/women/20.jpg" alt="" />
            <span className="leftbarFriendName">Jane</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="https://randomuser.me/api/portraits/women/20.jpg" alt="" />
            <span className="leftbarFriendName">Jane</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="https://randomuser.me/api/portraits/women/20.jpg" alt="" />
            <span className="leftbarFriendName">Jane</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="https://randomuser.me/api/portraits/women/20.jpg" alt="" />
            <span className="leftbarFriendName">Jane</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="https://randomuser.me/api/portraits/women/20.jpg" alt="" />
            <span className="leftbarFriendName">Jane</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="https://randomuser.me/api/portraits/women/20.jpg" alt="" />
            <span className="leftbarFriendName">Jane</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="https://randomuser.me/api/portraits/women/20.jpg" alt="" />
            <span className="leftbarFriendName">Jane</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="https://randomuser.me/api/portraits/women/20.jpg" alt="" />
            <span className="leftbarFriendName">Jane</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="https://randomuser.me/api/portraits/women/20.jpg" alt="" />
            <span className="leftbarFriendName">Jane</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="https://randomuser.me/api/portraits/women/20.jpg" alt="" />
            <span className="leftbarFriendName">Jane</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="https://randomuser.me/api/portraits/women/20.jpg" alt="" />
            <span className="leftbarFriendName">Jane</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
