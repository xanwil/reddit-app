import React from 'react'

export default function Comment(props) {
const { comment,
        author,
        created 
      } = props;


  return (
    <div>
      <div className='topRow'>
        <h3 className='author'>{author}</h3>
        <h3 className='created'>{created}</h3>
      </div>
      <div className='bottomRow'>
        <h3 className='comment'>{comment}</h3>
      </div>
    </div>
  )
}
