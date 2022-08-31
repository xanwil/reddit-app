import React from 'react'
import { useState } from 'react';

export default function ArticlePostedBy() {
    const [name, setName] = useState("Unknown");
  return (
    <div>
      <h5>Posted by { name }</h5>
    </div>
  )
}
