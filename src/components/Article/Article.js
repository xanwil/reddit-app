import React, { useContext } from "react";
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
    permalink,
  } = props;

  const { setShowComments, showComments } = useContext(ThingsContext);

  return (
    <div>
      <div className="article">
        <div className="topRow">
          <div className="score">
            <h5>&uarr;</h5>
            <h5>{score}</h5>
            <h5>&darr;</h5>
          </div>
          <p className="title">{title}</p>
        </div>
        <div className="middleRow">
          <div className="indent"></div>
          <div className="media">
            <img src={image} alt="" />
            {video ? (
              <video controls autoPlay muted>
                <source src={video} type="video/mp4" />
                <p>
                  Your browser doesn't support HTML video. Here is a
                  <a href={video}>link to the video</a> instead.
                </p>
              </video>
            ) : null}
          </div>
        </div>
        <div className="bottomRow">
          <div className="indent"></div>
          <div className="details">
            <h5 className="detailsItem1">{author}</h5>
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


