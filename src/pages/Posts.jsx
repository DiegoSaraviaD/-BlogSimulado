import React, { useEffect, useState } from 'react';
import { getPosts } from '../api/blogApi';
import PostCard from '../components/PostCard';
import Loader from '../components/Loader';
import ErrorMsg from '../components/ErrorMsg';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getPosts();
      // Limitar a 10 posts para mejor rendimiento
      setPosts(response.data.slice(0, 10));
    } catch (err) {
      console.error('Error al cargar posts:', err);
      setError(err.message || 'Error al cargar los posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return <Loader message="Cargando posts..." />;
  }

  if (error) {
    return (
      <ErrorMsg 
        message={error}
        onRetry={fetchPosts}
        showRetryButton={true}
      />
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header con animación hacker */}
        <div className="text-center mb-12 fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-green-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h1 className="text-4xl md:text-5xl font-bold text-green-400 hacker-glow glitch" data-text="CYBER_POSTS">
              CYBER_POSTS
            </h1>
          </div>
          <p className="text-cyan-400 text-lg max-w-2xl mx-auto">
            Accede a la base de datos de información del sistema
          </p>
        </div>

        {/* Estadísticas con efecto terminal */}
        <div className="mb-12 slide-in-left">
          <div className="hacker-terminal rounded-lg p-6 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-black border-2 border-green-400 rounded flex items-center justify-center shadow-lg hacker-pulse">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-green-400 font-semibold text-lg">{posts.length}</p>
                    <p className="text-cyan-400 text-sm">Archivos disponibles</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-black border-2 border-cyan-400 rounded flex items-center justify-center shadow-lg hacker-pulse">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-cyan-400 font-semibold text-lg">LOCAL</p>
                    <p className="text-green-400 text-sm">Base de datos local</p>
                  </div>
                </div>
              </div>
              
              <button
                onClick={fetchPosts}
                className="inline-flex items-center px-6 py-3 bg-green-400/20 text-green-400 rounded-lg hover:bg-green-400/30 transition-all duration-300 hover-lift border border-green-400 hacker-pulse"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                ACTUALIZAR
              </button>
            </div>
          </div>
        </div>

        {/* Grid de posts con animaciones escalonadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div 
              key={post.id} 
              className="fade-in-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>

        {/* Footer con información adicional */}
        <div className="mt-16 text-center slide-in-right">
          <div className="hacker-terminal rounded-lg p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="text-cyan-400">
                <p className="text-lg font-semibold">Mostrando {posts.length} de 100 archivos disponibles</p>
                <p className="text-sm">Sistema de información en tiempo real</p>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full hacker-pulse"></div>
                <span className="text-sm">SISTEMA_ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;


