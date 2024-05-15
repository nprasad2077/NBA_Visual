import React from 'react';

// Custom tooltip component
export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        <p className="intro">{`Points: ${payload[0].value}`}</p>
        <p className="intro">{`Assists: ${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};
