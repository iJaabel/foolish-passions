import React from "react";
import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbarContainer">
      <div className="rightbarWrapper">
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
          <li className="rightbarFriends">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="https://randomuser.me/api/portraits/women/22.jpg"
                alt="user is online"
              />
              <span className="rightbarOnlineBadge"></span>
            </div>
            <span className="rightbarUsername">Maria James</span>
          </li>
          <li className="rightbarFriends">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="https://randomuser.me/api/portraits/women/22.jpg"
                alt="user is online"
              />
              <span className="rightbarOnlineBadge"></span>
            </div>
            <span className="rightbarUsername">Maria James</span>
          </li>
          <li className="rightbarFriends">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="https://randomuser.me/api/portraits/women/22.jpg"
                alt="user is online"
              />
              <span className="rightbarOnlineBadge"></span>
            </div>
            <span className="rightbarUsername">Maria James</span>
          </li>
          <li className="rightbarFriends">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="https://randomuser.me/api/portraits/women/22.jpg"
                alt="user is online"
              />
              <span className="rightbarOnlineBadge"></span>
            </div>
            <span className="rightbarUsername">Maria James</span>
          </li>
          <li className="rightbarFriends">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="https://randomuser.me/api/portraits/women/22.jpg"
                alt="user is online"
              />
              <span className="rightbarOnlineBadge"></span>
            </div>
            <span className="rightbarUsername">Maria James</span>
          </li>
          <li className="rightbarFriends">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="https://randomuser.me/api/portraits/women/22.jpg"
                alt="user is online"
              />
              <span className="rightbarOnlineBadge"></span>
            </div>
            <span className="rightbarUsername">Maria James</span>
          </li>
          <li className="rightbarFriends">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="https://randomuser.me/api/portraits/women/22.jpg"
                alt="user is online"
              />
              <span className="rightbarOnlineBadge"></span>
            </div>
            <span className="rightbarUsername">Maria James</span>
          </li>
          <li className="rightbarFriends">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="https://randomuser.me/api/portraits/women/22.jpg"
                alt="user is online"
              />
              <span className="rightbarOnlineBadge"></span>
            </div>
            <span className="rightbarUsername">Maria James</span>
          </li>
          <li className="rightbarFriends">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="https://randomuser.me/api/portraits/women/22.jpg"
                alt="user is online"
              />
              <span className="rightbarOnlineBadge"></span>
            </div>
            <span className="rightbarUsername">Maria James</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
