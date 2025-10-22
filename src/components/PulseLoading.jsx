import React from 'react';
import './PulseLoading.css';

const PulseLoading = ({ message = 'Cargando...' }) => {
  return (
    <div className="pulse-loading-container">
      <div className="pulse-loading-content">
        <div className="pulse-circle">
          <div className="pulse-inner"></div>
        </div>
        <p className="pulse-message">{message}</p>
      </div>
    </div>
  );
};

export default PulseLoading;

