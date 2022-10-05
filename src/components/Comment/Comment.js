import React from "react";
import "./Comment.css";

export default function Comment(props) {
  const { comment, author, created } = props;

  return (
    <div className="comment">
      <div className="comment-indent"></div>
      <div className="comment-section">
        <div className="comment-top-row">
          <h6 className="comment-author">{author}</h6>
          <h6 className="comment-created">{created}</h6>
        </div>
        <div className="comment-bottom-row">
          <p className="comment-text">{comment}</p>
        </div>
      </div>
    </div>
  );
}
