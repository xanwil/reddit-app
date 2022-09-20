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

      const getCorrectData = (dataArray) => {
        const correctData = [];
        for (let i=1; i<dataArray.length; i++){
            correctData.push(dataArray[i].data);
        }
        return correctData;
      };

      const commentsData = getCorrectData(response);

      const commentData = commentsData.map(comment => comment.data.children.data);
      
      //maybe take out second data below
      //const commentsData = response.data.children;
      console.log(commentData);
      
      //const commentData = commentsData.map(comment => comment.data);



      setComments(commentData);

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
  });

  return (
    <div className="comments">
      <span>COMEEENTS HERERE!!</span>

      {comments.map((comment) => {
        return (
          <Comment
            author={comment.author}
            created={timeSince(comment.created_utc)}
            comment={comment.body}
          />
        );
      })}
    </div>
  );
}
