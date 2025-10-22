import { createBrowserRouter, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

// Páginas de autenticación
import Login from './features/auth/pages/Login';
import Register from './features/auth/pages/Register';

// Páginas de perfil
import Profile from './features/profile/pages/Profile';

// Componentes de demostración
import LoadingDemo from './components/LoadingDemo';

/**
 * Configuración de rutas de la aplicación
 * - Rutas públicas: login, register (redirigen a /profile si ya está autenticado)
 * - Rutas protegidas: profile (requieren autenticación)
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: '/register',
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: '/demo',
    element: <LoadingDemo />,
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
]);

export default router;

