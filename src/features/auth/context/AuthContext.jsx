import { createContext, useState, useEffect } from 'react';
import { loginUser, logoutUser, isAuthenticated } from '../services/authService';
import { getProfile } from '../../profile/services/profileService';
import LoadingSpinner from '../../../components/LoadingSpinner';

// Crear el contexto
export const AuthContext = createContext();

/**
 * Provider del contexto de autenticación
 * Gestiona el estado global del usuario y las operaciones de auth
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Verificar si hay una sesión activa al cargar la aplicación
   */
  useEffect(() => {
    const checkAuth = async () => {
      if (isAuthenticated()) {
        try {
          // Si existe token, obtenemos el perfil del usuario
          const profileData = await getProfile();
          setUser(profileData);
        } catch (err) {
          console.error('Error al verificar autenticación:', err);
          // Si el token es inválido, limpiamos
          await handleLogout();
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  /**
   * Manejar inicio de sesión
   * @param {string} email 
   * @param {string} password 
   */
  const handleLogin = async (email, password) => {
    try {
      setError(null);
      setLoading(true);
      
      // Hacer login y obtener token
      const loginData = await loginUser(email, password);
      
      // Obtener perfil del usuario
      const profileData = await getProfile();
      setUser(profileData);
      
      return { success: true, data: loginData };
    } catch (err) {
      setError(err.message || 'Error al iniciar sesión');
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  /**
   * Manejar cierre de sesión
   */
  const handleLogout = async () => {
    try {
      setLoading(true);
      await logoutUser();
    } catch (err) {
      console.error('Error al cerrar sesión:', err);
    } finally {
      setUser(null);
      setError(null);
      setLoading(false);
    }
  };

  /**
   * Actualizar datos del usuario en el contexto
   * @param {Object} userData 
   */
  const updateUser = (userData) => {
    setUser(userData);
  };

  /**
   * Limpiar errores
   */
  const clearError = () => {
    setError(null);
  };

  const value = {
    user,
    loading,
    error,
    isAuthenticated: !!user,
    login: handleLogin,
    logout: handleLogout,
    updateUser,
    clearError,
  };

  // Mostrar pantalla de carga mientras se verifica la autenticación
  if (loading) {
    return <LoadingSpinner type="modern" message="Verificando autenticación..." />;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

