import React from "react";
import "./Article.css";

export default function Article(props) {
  const {
    title,
    score,
    image,
    video,
    author,
    created,
    num_comments,
    secure_media,
  } = props;

  return (
    <div>
      <div className="topRow">
        <div className="score">
          <h3>&uarr; </h3>
          <h3>{score} </h3>
          <h3>&darr;</h3>
        </div>
        <h3 className="title">{title} </h3>
      </div>
      <div className="middleRow">
        <img src={image} alt="" />
        {/* <video src={ video }></video> */}
      </div>
      <div className="bottomRow">
        <h5>Posted by {author}</h5>
        <h5>{created}</h5>
        <h5> {num_comments}</h5>
      </div>
    </div>
  );
}
