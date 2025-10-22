import React from 'react';
import './AuthLoadingScreen.css';

const AuthLoadingScreen = ({ message = "Verificando autenticación..." }) => {
  return (
    <div className="auth-loading-screen">
      {/* Fondo con gradiente animado */}
      <div className="background-gradient"></div>
      
      {/* Partículas de seguridad */}
      <div className="security-particle particle-1"></div>
      <div className="security-particle particle-2"></div>
      <div className="security-particle particle-3"></div>
      <div className="security-particle particle-4"></div>
      <div className="security-particle particle-5"></div>
      <div className="security-particle particle-6"></div>
      
      {/* Escudo de seguridad */}
      <div className="security-shield">
        <div className="shield-ring ring-1"></div>
        <div className="shield-ring ring-2"></div>
        <div className="shield-ring ring-3"></div>
        <div className="shield-center">
          🔒
          <div className="shield-pulse"></div>
        </div>
      </div>
      
      {/* Líneas de verificación */}
      <div className="verification-lines">
        <div className="verify-line line-1"></div>
        <div className="verify-line line-2"></div>
        <div className="verify-line line-3"></div>
        <div className="verify-line line-4"></div>
      </div>
      
      {/* Texto con efecto de escritura */}
      <div className="auth-text">
        <span className="auth-char">V</span>
        <span className="auth-char">e</span>
        <span className="auth-char">r</span>
        <span className="auth-char">i</span>
        <span className="auth-char">f</span>
        <span className="auth-char">i</span>
        <span className="auth-char">c</span>
        <span className="auth-char">a</span>
        <span className="auth-char">n</span>
        <span className="auth-char">d</span>
        <span className="auth-char">o</span>
        <span className="auth-char"> </span>
        <span className="auth-char">a</span>
        <span className="auth-char">u</span>
        <span className="auth-char">t</span>
        <span className="auth-char">e</span>
        <span className="auth-char">n</span>
        <span className="auth-char">t</span>
        <span className="auth-char">i</span>
        <span className="auth-char">c</span>
        <span className="auth-char">a</span>
        <span className="auth-char">c</span>
        <span className="auth-char">i</span>
        <span className="auth-char">ó</span>
        <span className="auth-char">n</span>
        <span className="auth-char">.</span>
        <span className="auth-char">.</span>
        <span className="auth-char">.</span>
      </div>
      
      {/* Indicador de progreso */}
      <div className="auth-progress">
        <div className="progress-dots">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
          <div className="dot dot-4"></div>
          <div className="dot dot-5"></div>
        </div>
      </div>
    </div>
  );
};

export default AuthLoadingScreen;
