// StoppagePopup.js
import React from 'react';

const StoppagePopup = ({ stoppage }) => {
  const { reachTime, endTime, duration } = stoppage;

  return (
    <div>
      <p><strong>Reach Time:</strong> {reachTime}</p>
      <p><strong>End Time:</strong> {endTime}</p>
      <p><strong>Stoppage Duration:</strong> {duration} minutes</p>
    </div>
  );
};

export default StoppagePopup;
