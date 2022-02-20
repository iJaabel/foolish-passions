import React from "react";
import "./Rightbar.css";
import Online from "../online/Online";
import { Users } from "../../../dummy/data";

export default function Rightbar({ profile }) {

  const HomeBar = () => (
    <>
      <div className="birthdayContainer">
        <img
          className="birthdayImg"
          src="https://media.giphy.com/media/9EoBsYASxFwi0ygXZK/giphy.gif"
          alt=""
        />
        <span className="birthdayText">
          <b>Alina Pink</b> and <b>2 other friends</b> have a birthday today
        </span>
      </div>
      <hr className="rightbarLine" />
      <div className="rightbarAdSpaceContainer">
        <img
          className="rightbarAdImg"
          src="https://media.giphy.com/media/l2JJrTTQyOIRM8R0c/giphy.gif"
          alt="ad space"
        />
        <span className="rightbarAdSpaceText">Sponsored Ad</span>
      </div>
      <hr className="rightbarLine" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendsList">
        {Users.map((u) => (
          <Online key={u.id} user={u} />
        ))}
      </ul>
    </>
  );

  const ProfileBar = () => (
    <>
      <h4 className="rightbarInfoTitle">User Info</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
      </div>
      <h4 className="rightbarInfoTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img className="rightbarFollowingProfileImage" src="" alt="Profile" />
          <span className="rightbarFollowingName"> John Carter </span>
        </div>
      </div>
    </>
  );

  return (
    <div className="rightbarContainer">
      <div className="rightbarWrapper">
        {profile ? <ProfileBar /> : <HomeBar />}
      </div>
    </div>
  );
}
