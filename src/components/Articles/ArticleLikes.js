import React from 'react'
import { useState } from 'react';

export default function ArticleLikes() {
    const [likes, setLikes] = useState("0");
  return (
    <div>
        <h3>&uarr; { likes } &darr;</h3>
    </div>
  )
}
