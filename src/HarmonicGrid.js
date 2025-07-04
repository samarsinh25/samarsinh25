import React, { useState, useEffect } from 'react';

const HarmonicGrid = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => t + 0.08);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const dots = [];
  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      const posX = 20 + x * 15;
      const posY = 20 + y * 15;
      const offset = Math.sin(time + x * 0.5 + y * 0.3) * 3;
      dots.push(
        <circle 
          key={`${x}-${y}`} 
          cx={posX + offset} 
          cy={posY + offset} 
          r={1} 
          fill="black" 
          className="opacity-60" 
        />
      );
    }
  }

  return (
    <svg width="60" height="60">
      {dots}
    </svg>
  );
};

export default HarmonicGrid; 