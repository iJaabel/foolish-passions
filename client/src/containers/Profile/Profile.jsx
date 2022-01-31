import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Header, Leftbar, Rightbar, Feed } from "../../components";
import { getUser, getProfilePosts } from "../../app";
import "./Profile.css";

export default function Profile({match}) {
  const userData = useSelector((state) => state.user.data[0]);
  const userDataIsPending = useSelector((state) => state.user.pending);
  const username = match.params.username

  useEffect(() => {
    getUser(username);
    getProfilePosts(username)
  }, []);

  return (
    <>
      <Header />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            {userDataIsPending ? null : (
              <>
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
                  <span className="profileInfoUserName">@{userData ? userData.username : null}</span>
                  <p className="profileInfoDescription">Description</p>
                </div>
              </>
            )}
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
