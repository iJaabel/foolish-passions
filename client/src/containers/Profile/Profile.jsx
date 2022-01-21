import React from "react";
import "./Profile.css";
import { Header, Leftbar, Rightbar, Feed } from "../../components";

export default function Profile() {

  return (
    <>
      <Header />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImage"
                src="https://media.giphy.com/media/hrXV1CvTk05kguYmUu/giphy.gif"
                alt=""
              />

              <img
                className="profileUserImage"
                src="https://media.giphy.com/media/hrXV1CvTk45kguYmUu/giphy.gif"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoDisplayName">Display Name</h4>
              <span className="profileInfoUserName">@username</span>
              <p className="profileInfoDescription">Description</p>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="john" />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
