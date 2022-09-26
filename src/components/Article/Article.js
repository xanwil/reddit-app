import React, { useState } from "react";
import "./Article.css";
import Comments from "../Comments/Comments";


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
    permalink
  } = props;

  const [showComments, setShowComments] = useState(false);

  // const getRealComments = (num) => num > 0 ? num : 0;


  return (
    <div>
    <div className="article">
      <div className="topRow">
        <div className="score">
          <h3>&uarr; </h3>
          <h3>{score} </h3>
          <h3>&darr;</h3>
        </div>
        <h3 className="title">{title}</h3>
      </div>
      <div className="middleRow">
        <div className="indent"></div>
        <div className="image">
        {/* <div className="indent"></div> */}
        <img src={image} alt="" />
        {/* <video src={ video }></video> */}
        </div>
      </div>
      <div className="bottomRow">
        <div className="indent"></div>
        <div className="details">
          <h5 className="detailsItem1">Posted by {author}</h5>
          <h5 className="detailsItem2">{created}</h5>
          <h5 className="detailsItem3">
            <span
              onClick={() => {
                setShowComments(!showComments);
              }}            
              className="commentsLink"
            >
              <i className="fas fa-comment-alt"></i><span className="num_comments"> {num_comments}</span>
            </span>
          </h5>
        </div>
      </div>
      </div>
      {showComments ? <Comments permalink={permalink} num_comments={num_comments}/> : null}
    </div>
  );
}

// && num_comments > 0 
