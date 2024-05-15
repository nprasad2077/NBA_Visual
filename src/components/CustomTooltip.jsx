import React from 'react';

// Custom tooltip component
export const CustomTooltip = ({ active, payload, label }) => {
  console.log(payload);
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        <p className="intro">{`Points: ${payload[0].value}`}</p>
        <p className="intro">{`Assists: ${payload[1].value}`}</p>
        <p className="intro">{`Total Rebounds: ${payload[2].value}`}</p>
        <p className="intro">{`Steals: ${payload[3].value}`}</p>
      </div>
    );
  }

  return null;
};
