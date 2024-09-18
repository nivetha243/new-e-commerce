import React from 'react';
import './Erasers.css';

function Erasers() {
  // Sample data for circles and boxes
  const circleItems = Array(7).fill(null); // 7 circles
  const boxItems = Array(8).fill(null); // Adjust this according to the number of box items

  return (
    <div className="erasers-page">
      {/* Circle layout */}
      <div className="circle-layout">
        {circleItems.map((_, index) => (
          <div className="circle-item" key={index}>
            <div className="circle-placeholder">Circle {index + 1}</div>
          </div>
        ))}
      </div>
      {/* Box layout */}
      <div className="box-layout">
        {boxItems.map((_, index) => (
          <div className="box-item" key={index}>
            <div className="box-placeholder">Box {index + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Erasers;
