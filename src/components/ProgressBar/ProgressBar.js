import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

// const divStyle = {
//   --hel: 10
// }

// // export default function ProgressBar() {
// //   return (
// //     <div className='progressBar' style={divStyle} data-label='Loading...' >
      
// //     </div>
// //   )
// // }



export default function ProgressBar() {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (filled <100 && isRunning) {
      setTimeout(() => setFilled(prev => prev += 2), 50)
    }
  }, [filled, isRunning]);
  
  return (
    <div className='format'>
      <div className='progressBar format'>
        <div style={{
          height: "100%",
          width: `${filled}%`,
          backgroundColor: "black",
          transition: "width 0.5s",
          alignItems: "left"
        }}></div>
        <span className='progressPercent format'>{ filled }%</span>
      </div>
      <button className='btn format' onClick={() => setIsRunning(true)}>Run</button>
    </div>
  )
}

