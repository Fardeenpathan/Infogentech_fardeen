import React from 'react';
import './ShimmerEffect.css';

const ShimmerEffect = ({ width, height, className }) => {
  return (
    <div
      className={`shimmer-wrapper ${className || ''}`}
      style={{ width, height }}
    >
      <div className="shimmer-animation"></div>
    </div>
  );
};

export default ShimmerEffect;
