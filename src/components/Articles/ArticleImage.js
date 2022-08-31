import React from 'react'
import { useState } from 'react';

export default function ArticleImage() {
    const [image, setImage] = useState("");
  return (
    <div>
      { image }
    </div>
  )
}
