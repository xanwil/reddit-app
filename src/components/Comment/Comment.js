import React from "react";
import "./Comment.css";

export default function Comment(props) {
  const { comment, author, created } = props;

  return (
    <div className="commentContainer">
      <div className="commentIndent"></div>
      <div className="commentSection">
        <div className="topRow">
          <h6 className="author">{author}</h6>
          <h6 className="created">{created}</h6>
        </div>
        <div className="bottomRow">
          <p className="comment">{comment}</p>
        </div>
      </div>
    </div>
  );
}
