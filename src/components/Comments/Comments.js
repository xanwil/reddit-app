import React, { useState, useEffect } from "react";
import Comment from "../Comment/Comment";
const axios = require("axios");

export default function Comments(props) {
  const { permalink } = props;
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    try {
      const response = await axios.get(
        `https://www.reddit.com${permalink}.json`
      );

      console.log(response, response.data[1].data.children);

      setComments(response.data[1].data.children);

    //   TODO: build the correct Object for each comment and map each param to the params of the Comment Component.

      //   const getCorrectData = (dataArray) => {
      //     const correctData = [];
      //     for (let i=1; i<dataArray.length; i++){
      //         correctData.push(dataArray[i].data);
      //     }
      //     return correctData;
      //   };

      //   const commentsData = getCorrectData(response);
      //   console.log(commentsData);

      //   const commentData = commentsData.map(comment => comment.data.children.data);

      //maybe take out second data below
      //const commentsData = response.data.children;

      //const commentData = commentsData.map(comment => comment.data);

      //   setComments(commentData);

      // setComments(commentData);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  function timeSince(previous) {
    const current = Date.now();
    const elapsed = current / 1000 - previous;

    const minutes = elapsed / 60;
    const hours = minutes / 60;
    const days = Math.round(hours / 24);

    if (days < 1) {
      return "Less than a day ago";
    } else {
      return `${days} days ago`;
    }
  }

  useEffect(function () {
    getComments();
  }, []);

  return (
    <div className="comments">
      {comments.map((comment) => {
        return (
          <Comment
            key=""
            author={comment.data.author}
            created={timeSince(comment.data.created_utc)}
            comment={comment.data.body}
          />
        );
      })}
    </div>
  );
}
