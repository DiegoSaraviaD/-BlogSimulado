import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  const navigation = [
    { 
      name: 'Posts', 
      href: '/posts', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen hacker-bg flex flex-col">
      {/* Header/Navbar Hacker */}
      <nav className="hacker-panel border-b border-green-400 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand Hacker */}
            <div className="flex items-center">
              <Link 
                to="/posts" 
                className="flex items-center space-x-3 group"
              >
                <div className="w-10 h-10 bg-black border-2 border-green-400 rounded flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 hacker-pulse">
                  <span className="text-green-400 text-xl font-bold">C</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-green-400 hacker-glow">CYBER_BLOG</h1>
                  <p className="text-cyan-400 text-xs">Sistema de información</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Hacker */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 cyber-border ${
                      isActive(item.href)
                        ? 'bg-green-400/20 text-green-400 shadow-lg hacker-pulse'
                        : 'text-cyan-400 hover:text-green-400 hover:bg-green-400/10'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
                
                {/* Botón toggle tema */}
                <button
                  onClick={toggleTheme}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 cyber-border text-cyan-400 hover:text-green-400 hover:bg-green-400/10"
                  title={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                >
                  {isDark ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                  <span>{isDark ? 'Claro' : 'Oscuro'}</span>
                </button>
              </div>
            </div>

            {/* Mobile menu button Hacker */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-cyan-400 hover:text-green-400 hover:bg-green-400/10 transition-colors duration-200 cyber-border"
              >
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu Hacker */}
        {isMenuOpen && (
          <div className="md:hidden slide-in-left">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 hacker-panel border-t border-green-400">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 flex items-center space-x-3 cyber-border ${
                    isActive(item.href)
                      ? 'bg-green-400/20 text-green-400 hacker-pulse'
                      : 'text-cyan-400 hover:text-green-400 hover:bg-green-400/10'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Botón toggle tema móvil */}
              <button
                onClick={toggleTheme}
                className="block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 flex items-center space-x-3 cyber-border text-cyan-400 hover:text-green-400 hover:bg-green-400/10"
              >
                {isDark ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
                <span>{isDark ? 'Modo Claro' : 'Modo Oscuro'}</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative flex-1">
        <Outlet />
      </main>

      {/* Footer Hacker */}
      <footer className="hacker-panel border-t border-green-400 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-black border-2 border-green-400 rounded flex items-center justify-center hacker-pulse">
                <span className="text-green-400 font-bold">C</span>
              </div>
              <div>
                <h3 className="text-green-400 font-semibold hacker-glow">CYBER_BLOG</h3>
                <p className="text-cyan-400 text-sm">Sistema de información avanzado</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-cyan-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm">Powered by React</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm">Datos Locales</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-green-400 text-center">
            <p className="text-cyan-400 text-sm">
              © 2024 CYBER_BLOG. Desarrollado con 
              <svg className="inline w-4 h-4 mx-1 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              usando React y Tailwind CSS.
            </p>
            <div className="mt-2 text-xs text-green-400">
              <span className="terminal-blink">_</span> Sistema activo - Acceso autorizado
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
