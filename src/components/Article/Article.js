import React from 'react'

export default function Article(props) {
    const { title, score, image, video, author, created, num_comments, secure_media } = props;



  return (
    <div>
      <h3>{ title } </h3>
      <h3>&uarr; { score } &darr;</h3>
      <img src={ image } alt=""/>
      {/* <video src={ video }></video> */}
      <h5>Posted by { author }</h5>
      <h5>{ created }</h5>
      <h5> { num_comments }</h5> 
    </div>
  )
}

