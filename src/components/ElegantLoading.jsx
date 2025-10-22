import React from 'react';
import './ElegantLoading.css';

const ElegantLoading = ({ message = 'Cargando...' }) => {
  return (
    <div className="elegant-loading-container">
      {/* Burbujas flotantes */}
      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      
      <div className="elegant-content">
        <div className="elegant-icon">
          <div className="icon-circle">
            <div className="icon-inner">⚡</div>
          </div>
        </div>
        <div className="elegant-text">
          <h2 className="elegant-title">{message}</h2>
          <div className="elegant-progress">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElegantLoading;