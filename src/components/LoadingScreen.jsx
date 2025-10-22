import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ message = "Cargando..." }) => {
  return (
    <div className="loading-screen">
      {/* Partículas de fondo */}
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
      <div className="particle particle-5"></div>
      
      {/* Ondas de energía */}
      <div className="energy-wave wave-1"></div>
      <div className="energy-wave wave-2"></div>
      <div className="energy-wave wave-3"></div>
      
      {/* Círculos concéntricos */}
      <div className="concentric-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
      </div>
      
      {/* Spinner principal */}
      <div className="main-spinner">
        <div className="spinner-ring ring-1"></div>
        <div className="spinner-ring ring-2"></div>
        <div className="spinner-ring ring-3"></div>
        <div className="spinner-core">
          <div className="core-pulse"></div>
        </div>
      </div>
      
      {/* Texto con animación */}
      <div className="loading-text">
        <span className="text-char">C</span>
        <span className="text-char">a</span>
        <span className="text-char">r</span>
        <span className="text-char">g</span>
        <span className="text-char">a</span>
        <span className="text-char">n</span>
        <span className="text-char">d</span>
        <span className="text-char">o</span>
        <span className="text-char">.</span>
        <span className="text-char">.</span>
        <span className="text-char">.</span>
      </div>
      
      {/* Barra de progreso animada */}
      <div className="progress-container">
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;


