import React from "react";
import "./Comment.css";

export default function Comment(props) {
  const { comment, author, created } = props;

  return (
    <div className="commentContainer">
      <div className="topRow">
        <div className="commentIndent">
          
        </div>
        <div className="commentDetails">
          <h6 className="author">{author}</h6>
          <h6 className="created">{created}</h6>
        </div>
      </div>
      <div className="bottomRow">
        <div className="commentIndent">
          
        </div>
        <div className="commentDetails">
          <h5 className="comment">{comment}</h5>
        </div>
      </div>
    </div>
  );
}
