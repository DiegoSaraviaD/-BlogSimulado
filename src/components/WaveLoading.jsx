import React from 'react';
import './WaveLoading.css';

const WaveLoading = ({ message = 'Cargando...' }) => {
  return (
    <div className="wave-loading-container">
      <div className="wave-loading-content">
        <div className="wave-container">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
        </div>
        <p className="wave-message">{message}</p>
      </div>
    </div>
  );
};

export default WaveLoading;


