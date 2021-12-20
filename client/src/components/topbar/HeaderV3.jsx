import React from "react";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import "./header.css";

export default function HeaderV3() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Foolish Passions</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post, or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">8</span>
          </div>
        </div>
        <img
          src="https://randomuser.me/api/portraits/women/91.jpg"
          alt="User Profile"
          className="topbarProfile"
        />
      </div>
    </div>
  );
}
