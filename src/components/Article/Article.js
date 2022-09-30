import React, { useState, useContext } from "react";
import "./Article.css";
import Comments from "../Comments/Comments";
import ThingsContext from "../thingsContext";


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
    permalink,
  } = props;

  const { setShowComments, showComments } = useContext(ThingsContext);

  // const getRealComments = (num) => num > 0 ? num : 0;

  return (
    <div>
      <div className="article">
        <div className="topRow">
          <div className="score">
            <h5>&uarr; </h5>
            <h5>{score} </h5>
            <h5>&darr;</h5>
          </div>
          <p className="title">{title}</p>
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
            <div className="detailsRight">
              <h5 className="detailsItem2">{created}</h5>
              <h5 className="detailsItem3">
                <span
                  onClick={() => {
                    setShowComments(!showComments);
                  }}
                  className="commentsLink"
                >
                  <i className="fas fa-comment-alt"></i>
                  <span className="num_comments"> {num_comments}</span>
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
     
      {showComments ? (
        <Comments permalink={permalink} num_comments={num_comments} />
      ) : null}
      
    </div>
  );
}

// && num_comments > 0
