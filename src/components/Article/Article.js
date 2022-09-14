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
    <div className="article">
      <div className="topRow">
        <div className="score">
          <h3>&uarr; </h3>
          <h3>{score} </h3>
          <h3>&darr;</h3>
        </div>
        <h3 className="title">{title} </h3>
      </div>
      <div className="middleRow">
      {/* <div className="indent"></div> */}
        <img src={image} alt="" />
        {/* <video src={ video }></video> */}
      </div>
      <div className="bottomRow">
        <div className="indent"></div>
        <div className="details">
          <h5 className="detailsItem1">Posted by {author}</h5>
          <h5 className="detailsItem2">{created}</h5>
          <h5 className="detailsItem3"><a className="commentsLink" href="#"><i class='fas fa-comment-alt'></i> {num_comments}</a></h5>
        </div>
      </div>
    </div>
  );
}
