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
          <h3 className="author">{author}</h3>
          <h3 className="created">{created}</h3>
        </div>
      </div>
      <div className="bottomRow">
        <div className="commentIndent">
          
        </div>
        <div className="commentDetails">
          <h3 className="comment">{comment}</h3>
        </div>
      </div>
    </div>
  );
}
