import React from 'react';
import ModernLoading from './ModernLoading';
import ElegantLoading from './ElegantLoading';
import CircleWaveLoading from './CircleWaveLoading';
import DotsBouncingLoading from './DotsBouncingLoading';
import SquaresRotatingLoading from './SquaresRotatingLoading';

const LoadingSpinner = ({ 
  message = 'Cargando...', 
  type = 'modern' 
}) => {
  const LoadingComponent = {
    modern: ModernLoading,
    elegant: ElegantLoading,
    circleWave: CircleWaveLoading,
    dotsBouncing: DotsBouncingLoading,
    squaresRotating: SquaresRotatingLoading
  }[type] || ModernLoading;

  return <LoadingComponent message={message} />;
};

export default LoadingSpinner;
