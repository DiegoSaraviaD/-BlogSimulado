import { Navigate } from 'react-router-dom';
import { useAuth } from '../features/auth/hooks/useAuth';

/**
 * Componente para rutas públicas (login, register)
 * Redirige al perfil si el usuario ya está autenticado
 */
const PublicRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  // Mostrar loading mientras se verifica la autenticación
  if (loading) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        fontSize: '18px',
        fontWeight: '600'
      }}>
        Cargando...
      </div>
    );
  }

  // Si ya está autenticado, redirigir al perfil
  if (isAuthenticated) {
    return <Navigate to="/profile" replace />;
  }

  // Si no está autenticado, mostrar la página pública
  return children;
};

export default PublicRoute;



