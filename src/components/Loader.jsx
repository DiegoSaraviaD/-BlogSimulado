import React from 'react';

const Loader = ({ message = "Cargando..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen hacker-bg">
      {/* Terminal simplificado */}
      <div className="terminal-window p-6 max-w-sm w-full">
        {/* Header del terminal */}
        <div className="terminal-header mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-4">SYSTEM_TERMINAL.exe</span>
          </div>
        </div>
        
        {/* Cuerpo del terminal */}
        <div className="terminal-body">
          {/* Spinner simple */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-8 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
          
          {/* Mensaje principal */}
          <div className="text-center">
            <div className="text-green-400 hacker-glow text-lg mb-2">
              {message}
            </div>
            <div className="text-cyan-400 text-sm">
              Inicializando sistema...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;



