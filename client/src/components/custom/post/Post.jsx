import React from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users, Comments } from "../../dummy/data";

export default function Post({ post }) {
  const findUser = (userIdIAmLookingFor) => {
    const foundUser = Users.filter((u) => u.id === userIdIAmLookingFor);
    if (foundUser === undefined || null || NaN || 0 || false) {
      console.log("no user found")
      return
    };
    return foundUser;
  };

  const findPostComments = (commentsPostIdIAmLookingFor) => {
    const foundComments = Comments.filter(c => c.postId === commentsPostIdIAmLookingFor)
    if (!foundComments) {
      console.log("no comments found")
      return
    }
    return foundComments
  }
  console.log(`findPostComment: \n`, findPostComments(post?.id));


  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={findUser(post.userId)[0].image}
              alt="post profile"
            />
            <span className="postUsername">
              {findUser(post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.body}</span>
          <img className="postImg" src={post?.img} alt="in post" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="https://media.giphy.com/media/URxmJywZU1J47gdhSV/giphy.gif"
              alt="nice icon"
            />
            <img
              className="likeIcon"
              src="https://media.giphy.com/media/hrXV1CvTk55kguYmUu/giphy.gif"
              alt="amazing icon"
            />
            <span className="postLikeCounter">
              <b className="postLikePeople">{post.reactions} people</b> liked
              this post
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{findPostComments(post.id).length} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// https://youtu.be/zM93yZ_8SvE?t=5214
