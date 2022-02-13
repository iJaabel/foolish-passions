import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import "./Header.css";

export default function HeaderV3() {
  const activeUser = useSelector(state => state.user.active)
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Foolish Passions</span>
        </Link>
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
        <Link to={`/profile/${activeUser.username}`} >
          <img
            src={activeUser.profilePicture ? activeUser.profilePicture : "/no-avatar.png"}
            alt="User Profile"
            className="topbarProfile"
          />
        </Link>
      </div>
    </div>
  );
}
