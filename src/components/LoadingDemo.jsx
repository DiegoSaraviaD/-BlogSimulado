import React, { useState } from 'react';
import ModernLoading from './ModernLoading';
import ElegantLoading from './ElegantLoading';
import CircleWaveLoading from './CircleWaveLoading';
import DotsBouncingLoading from './DotsBouncingLoading';
import SquaresRotatingLoading from './SquaresRotatingLoading';

const LoadingDemo = () => {
  const [showLoading, setShowLoading] = useState(false);
  const [loadingType, setLoadingType] = useState('modern');

  const handleShowLoading = (type) => {
    setLoadingType(type);
    setShowLoading(true);
    
    // Simular carga por 3 segundos
    setTimeout(() => {
      setShowLoading(false);
    }, 3000);
  };

  if (showLoading) {
    const LoadingComponent = {
      modern: ModernLoading,
      elegant: ElegantLoading,
      circleWave: CircleWaveLoading,
      dotsBouncing: DotsBouncingLoading,
      squaresRotating: SquaresRotatingLoading
    }[loadingType];
    
    return <LoadingComponent message="Cargando aplicación..." />;
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
        ✨ Pantallas de Carga - 5 Estilos Diferentes
      </h1>
      
      <p style={{ fontSize: '1.2rem', marginBottom: '3rem', textAlign: 'center', maxWidth: '600px' }}>
        Elige tu animación favorita para las pantallas de carga
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        width: '100%',
        maxWidth: '900px'
      }}>
        <button
          onClick={() => handleShowLoading('modern')}
          style={{
            padding: '20px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            background: 'rgba(255, 255, 255, 0.2)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '15px',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}
          onMouseOver={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.3)';
            e.target.style.transform = 'translateY(-5px)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          ✨ Moderno
          <br />
          <small>Anillos + Partículas</small>
        </button>

        <button
          onClick={() => handleShowLoading('elegant')}
          style={{
            padding: '20px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            background: 'rgba(255, 255, 255, 0.2)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '15px',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}
          onMouseOver={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.3)';
            e.target.style.transform = 'translateY(-5px)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          💎 Elegante
          <br />
          <small>Ícono + Progreso</small>
        </button>

        <button
          onClick={() => handleShowLoading('circleWave')}
          style={{
            padding: '20px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            background: 'rgba(255, 255, 255, 0.2)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '15px',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}
          onMouseOver={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.3)';
            e.target.style.transform = 'translateY(-5px)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          🌊 Ondas
          <br />
          <small>Círculos Expansivos</small>
        </button>

        <button
          onClick={() => handleShowLoading('dotsBouncing')}
          style={{
            padding: '20px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            background: 'rgba(255, 255, 255, 0.2)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '15px',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}
          onMouseOver={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.3)';
            e.target.style.transform = 'translateY(-5px)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          ⚪ Puntos
          <br />
          <small>Rebote Secuencial</small>
        </button>

        <button
          onClick={() => handleShowLoading('squaresRotating')}
          style={{
            padding: '20px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            background: 'rgba(255, 255, 255, 0.2)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '15px',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}
          onMouseOver={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.3)';
            e.target.style.transform = 'translateY(-5px)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          ⬜ Cuadrados
          <br />
          <small>Rotación + Rayos</small>
        </button>
      </div>

      <div style={{
        marginTop: '3rem',
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '20px',
        borderRadius: '15px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <h3 style={{ marginBottom: '1rem' }}>✨ Características</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px',
          fontSize: '0.9rem'
        }}>
          <div>✨ 5 estilos diferentes</div>
          <div>🌊 Ondas expansivas</div>
          <div>⚪ Puntos rebotando</div>
          <div>⬜ Cuadrados giratorios</div>
          <div>🎨 Gradientes azules</div>
          <div>📱 Responsive</div>
          <div>⚡ Animaciones fluidas</div>
          <div>💎 Efectos profesionales</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingDemo;