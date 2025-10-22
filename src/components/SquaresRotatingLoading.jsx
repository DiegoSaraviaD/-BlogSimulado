import React from 'react';
import './SquaresRotatingLoading.css';

const SquaresRotatingLoading = ({ message = 'Cargando...' }) => {
  return (
    <div className="squares-rotating-container">
      <div className="squares-rotating-content">
        <div className="rotating-squares">
          <div className="rotating-square"></div>
          <div className="rotating-square"></div>
          <div className="rotating-square"></div>
          <div className="rotating-square"></div>
        </div>
        <div className="squares-text">
          <span className="squares-message">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default SquaresRotatingLoading;
