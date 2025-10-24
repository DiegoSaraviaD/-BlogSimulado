import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostById, getPostComments, getUserById } from '../api/blogApi';
import Loader from '../components/Loader';
import ErrorMsg from '../components/ErrorMsg';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPostData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Obtener post, comentarios y usuario en paralelo
      const [postResponse, commentsResponse, userResponse] = await Promise.all([
        getPostById(id),
        getPostComments(id),
        getPostById(id).then(postRes => getUserById(postRes.data.userId))
      ]);

      setPost(postResponse.data);
      setComments(commentsResponse.data.slice(0, 5)); // Limitar a 5 comentarios
      setUser(userResponse.data);
    } catch (err) {
      console.error('Error al cargar post:', err);
      setError(err.message || 'Error al cargar el post');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchPostData();
    }
  }, [id]);

  if (loading) {
    return <Loader message="Cargando post..." />;
  }

  if (error) {
    return (
      <ErrorMsg 
        message={error}
        onRetry={fetchPostData}
        showRetryButton={true}
      />
    );
  }

  if (!post) {
    return (
      <ErrorMsg 
        message="Post no encontrado"
        showRetryButton={false}
      />
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb con efecto glassmorphism */}
        <nav className="mb-8 slide-in-left">
          <div className="glass rounded-xl p-4 shadow-lg">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link 
                  to="/posts" 
                  className="text-white/80 hover:text-white transition-colors duration-200 flex items-center space-x-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>Posts</span>
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li className="text-white font-medium">Post #{post.id}</li>
            </ol>
          </div>
        </nav>

        {/* Post principal con efecto glassmorphism */}
        <article className="glass rounded-2xl shadow-2xl overflow-hidden fade-in-up">
          {/* Header del post */}
          <div className="px-8 py-10 border-b border-white/20">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-black border-2 border-green-400 rounded-2xl flex items-center justify-center shadow-lg hacker-pulse">
                  <span className="text-green-400 font-bold text-lg">
                    {user?.name?.charAt(0) || 'U'}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">
                    {user?.name || `Usuario ${post.userId}`}
                  </p>
                  <p className="text-white/70 text-sm">
                    {user?.email || `user${post.userId}@example.com`}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-white/20 text-white backdrop-blur-sm border border-white/30">
                #{post.id}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
          </div>

          {/* Contenido del post */}
          <div className="px-8 py-10">
            <div className="prose prose-lg max-w-none">
              <p className="text-white/90 leading-relaxed whitespace-pre-line text-lg">
                {post.body}
              </p>
            </div>
          </div>

          {/* Footer del post */}
          <div className="px-8 py-6 bg-white/5 border-t border-white/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-sm text-white/70">
                <span className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <span>{comments.length} comentarios</span>
                </span>
                <span className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <span>Me gusta</span>
                </span>
              </div>
              <button
                onClick={fetchPostData}
                className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-all duration-300 hover-lift backdrop-blur-sm border border-white/30"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Actualizar
              </button>
            </div>
          </div>
        </article>

        {/* Comentarios con efecto glassmorphism */}
        {comments.length > 0 && (
          <div className="mt-12 slide-in-right">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center space-x-3">
              <div className="w-8 h-8 bg-black border-2 border-green-400 rounded-lg flex items-center justify-center hacker-pulse">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <span>Comentarios ({comments.length})</span>
            </h2>
            <div className="space-y-6">
              {comments.map((comment, index) => (
                <div key={comment.id} className="glass rounded-2xl p-6 shadow-xl fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black border-2 border-green-400 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 hacker-pulse">
                      <span className="text-green-400 font-bold text-lg">
                        {comment.email.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h4 className="text-white font-semibold text-lg">
                          {comment.name}
                        </h4>
                        <span className="px-2 py-1 bg-white/20 text-white/80 text-xs rounded-full">
                          #{index + 1}
                        </span>
                      </div>
                      <p className="text-white/80 leading-relaxed mb-3">
                        {comment.body}
                      </p>
                      <p className="text-white/60 text-sm">
                        {comment.email}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Botón de regreso con efecto glassmorphism */}
        <div className="mt-12 text-center fade-in-up">
          <Link
            to="/posts"
            className="inline-flex items-center px-6 py-3 bg-white/20 text-white rounded-2xl hover:bg-white/30 transition-all duration-300 hover-lift backdrop-blur-sm border border-white/30 shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;



