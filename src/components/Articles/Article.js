import React from 'react'

export default function Article(props) {
    const { title, score, image, author, created, num_comments } = props;

  return (
    <div>
      <h3>{ title } </h3>
      <h3>&uarr; { score } &darr;</h3>
      { image }
      <h5>Posted by { author }</h5>
      <h5>{ created }</h5>
      <h5> { num_comments }</h5> 
    </div>
  )
}

