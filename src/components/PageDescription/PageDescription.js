import React from 'react';
import { useState } from 'react';

import "./PageDescription.css";

export default function PageDescription() {
    const [description, setDescription] = useState("Discover");
    
  return (
    <div className='pageDescriptionContainer'>
    <div className='pageDescription'>
      <h2>{description === "Discover" ? description : `Discover ${description} in`} Brighton & Hove</h2>
    </div>
    <div className='empty'>
    </div>
    </div>
  )
}