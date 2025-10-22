import React from 'react';
import './DotsBouncingLoading.css';

const DotsBouncingLoading = ({ message = 'Cargando...' }) => {
  return (
    <div className="dots-bouncing-container">
      <div className="dots-bouncing-content">
        <div className="bouncing-dots">
          <div className="bouncing-dot"></div>
          <div className="bouncing-dot"></div>
          <div className="bouncing-dot"></div>
          <div className="bouncing-dot"></div>
          <div className="bouncing-dot"></div>
        </div>
        <div className="dots-text">
          <span className="dots-message">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default DotsBouncingLoading;
