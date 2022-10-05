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

  const { setActiveCommentsId, activeCommentsId } = useContext(ThingsContext);

  return (
    <div>
      <div className="article">
        <div className="article-top-row">
          <div className="article-score">
            <div>&uarr;</div>
            <div>{score}</div>
            <div>&darr;</div>
          </div>
          <p className="article-title">{title}</p>
        </div>
        <div className="article-middle-row">
          <div className="article-indent"></div>
          <div className="article-media">
            <img src={image} alt={title} />
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
        <div className="article-bottom-row">
          <div className="article-indent"></div>
          <div className="article-details">
            <h5 className="article-details-item-1">{author}</h5>
            <div className="article-details-right">
              <div className="article-details-item-2">{created}</div>
              <h5 className="article-details-item-3">
                <span
                  onClick={() => {
                    if (permalink === activeCommentsId) {
                      setActiveCommentsId(null);
                    } else if (num_comments === 0) {
                      setActiveCommentsId(null);
                    } else {
                      setActiveCommentsId(permalink);
                    }
                  }}
                  className={(num_comments >0) ? "article-comments-link" : "article-no-comments-link"}
                >
                  <i className="article-fas fa-comment-alt"></i>
                  <span className="article-num_comments"> {num_comments}</span>
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>

      {activeCommentsId === permalink ? (
        <Comments permalink={permalink} num_comments={num_comments} />
      ) : null}
    </div>
  );
}
