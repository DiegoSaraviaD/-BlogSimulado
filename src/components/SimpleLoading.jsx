import React from 'react';
import './SimpleLoading.css';

const SimpleLoading = ({ message = 'Cargando...' }) => {
  return (
    <div className="simple-loading-container">
      <div className="simple-loading-content">
        <div className="simple-spinner">
          <div className="simple-dot"></div>
          <div className="simple-dot"></div>
          <div className="simple-dot"></div>
        </div>
        <p className="simple-message">{message}</p>
      </div>
    </div>
  );
};

export default SimpleLoading;


