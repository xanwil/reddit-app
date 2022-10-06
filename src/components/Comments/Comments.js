import React, { useState, useEffect } from "react";
import Comment from "../Comment/Comment";
import timeSince from "../../utils/timeSince";

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

    } catch (error) {
      console.error(error);
    } 
  };

  useEffect(function () {
    getComments();
  }, []);

  return (
    <div className="comments">
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.data.id}
            author={comment.data.author}
            created={timeSince(comment.data.created_utc)}
            comment={comment.data.body}
          />
        );
      })}
    </div>
  );
}
