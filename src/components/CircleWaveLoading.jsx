import React from 'react';
import './CircleWaveLoading.css';

const CircleWaveLoading = ({ message = 'Cargando...' }) => {
  return (
    <div className="circle-wave-container">
      <div className="circle-wave-content">
        <div className="wave-circles">
          <div className="wave-circle"></div>
          <div className="wave-circle"></div>
          <div className="wave-circle"></div>
          <div className="wave-circle"></div>
          <div className="wave-circle"></div>
        </div>
        <div className="wave-text">
          <span className="wave-message">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default CircleWaveLoading;
