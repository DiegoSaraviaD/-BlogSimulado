import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './features/auth/context/AuthContext';
import router from './router';

/**
 * Componente principal de la aplicación
 * Envuelve toda la app con el AuthProvider para gestión global de autenticación
 */
function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;


