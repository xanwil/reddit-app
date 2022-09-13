import React from 'react';
import { useState } from 'react';

import "./PageDescription.css";

export default function PageDescription() {
    const [description, setDescription] = useState("DISCOVER");
    
  return (
    <div className='pageDescriptionContainer'>
    <div className='pageDescription'>
      <h2>{description === "DISCOVER" ? description : `DISCOVER ${description} in`} BRIGHTON & HOVE</h2>
    </div>
    <div className='empty'>
    </div>
    </div>
  )
}
