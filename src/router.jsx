import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from './components/Layout';

// Páginas del blog
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';

/**
 * Configuración de rutas de la aplicación
 * - Rutas del blog: posts, post detail
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/posts" replace />,
      },
      {
        path: 'posts',
        element: <Posts />,
      },
      {
        path: 'post/:id',
        element: <PostDetail />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/posts" replace />,
  },
]);

export default router;

