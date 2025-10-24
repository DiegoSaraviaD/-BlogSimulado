import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <Link 
      to={`/post/${post.id}`}
      className="block group fade-in-up hover-lift"
    >
      <div className="hacker-terminal rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 p-6 h-80 flex flex-col relative overflow-hidden hover-glow">
        {/* Efecto de terminal */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Efectos decorativos hacker */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full hacker-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-cyan-400 rounded-full hacker-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Header del post */}
        <div className="flex items-start justify-between mb-4 relative z-10">
          <div className="flex-1">
            <h2 className="text-lg font-bold text-green-400 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2 hacker-glow">
              {post.title}
            </h2>
          </div>
          <div className="ml-3 flex-shrink-0">
            <span className="inline-flex items-center px-3 py-1 rounded text-xs font-semibold bg-green-400/20 text-green-400 border border-green-400">
              #{post.id}
            </span>
          </div>
        </div>

        {/* Contenido del post */}
        <div className="flex-1 relative z-10 flex flex-col justify-center">
          <p className="text-cyan-400 text-sm leading-relaxed line-clamp-4 group-hover:text-green-400 transition-colors duration-300">
            {post.body}
          </p>
        </div>

        {/* Footer del post */}
        <div className="mt-6 pt-4 border-t border-green-400/30 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-cyan-400 group-hover:text-green-400 transition-colors duration-300">
              <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center mr-3 border border-green-400">
                <svg 
                  className="w-4 h-4 text-green-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                  />
                </svg>
              </div>
              <span className="font-medium">USER_{post.userId}</span>
            </div>
            <div className="flex items-center text-sm text-cyan-400 group-hover:text-green-400 transition-all duration-300">
              <span className="mr-2">LEER</span>
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Efecto de scan line en hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      </div>
    </Link>
  );
};

export default PostCard;



