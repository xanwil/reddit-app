import React from 'react';
import { useState } from 'react';

export default function ArticleCommentsNumber() {
    const [numOfComments, setNumOfComments] = useState("0");
  return (
    <div>
      <h5><i className="fa-solid fa-comments"></i>{ numOfComments }</h5>
    </div>
  )
}
