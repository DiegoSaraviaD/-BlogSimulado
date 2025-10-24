import React from 'react';

const ErrorMsg = ({ 
  message = "Ha ocurrido un error", 
  onRetry = null,
  showRetryButton = true 
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] p-6">
      {/* Icono de error */}
      <div className="mb-4">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
          <svg 
            className="w-8 h-8 text-red-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" 
            />
          </svg>
        </div>
      </div>

      {/* Mensaje de error */}
      <div className="text-center max-w-md">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          ¡Ups! Algo salió mal
        </h3>
        <p className="text-gray-600 mb-4">
          {message}
        </p>
        
        {/* Botón de reintento */}
        {showRetryButton && onRetry && (
          <button
            onClick={onRetry}
            className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <svg 
              className="w-4 h-4 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
              />
            </svg>
            Intentar de nuevo
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMsg;



