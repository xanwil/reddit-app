import React from 'react';
import { useState } from 'react';

export default function ArticleHoursAgo() {
    const [hoursAgo, setHoursAgo] = useState("0")
  return (
    <div>
      <h5>{ hoursAgo } hours ago</h5>
    </div>
  )
}
