import React from 'react';
import "./suggestions.css";

export default function Suggestions() {
  return (
    <div className='suggestions'>
      <ul>
        <li><a className="link" href=''>Food</a></li>
        <li><a className="link" href=''>Football</a></li>
        <li><a className="link" href=''>Beach</a></li>
        <li><a className="link" href=''>Walks</a></li>
      </ul>
    </div>
  )
}
