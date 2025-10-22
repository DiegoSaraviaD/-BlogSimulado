import axios from 'axios';
import Cookies from 'js-cookie';

// Base URL del backend
const BASE_URL = 'https://reflexoperu-v3.marketingmedico.vip/backend/public/api';

// Configuración de Axios
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  // withCredentials solo si el backend lo requiere
  // withCredentials: true,
});

// Interceptor para agregar token en cada petición
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Registrar nuevo usuario
 * @param {Object} userData - Datos del usuario a registrar
 * @returns {Promise} Respuesta del servidor
 */
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error en registerUser:', error);
    
    // Manejar diferentes tipos de errores
    if (error.response) {
      // El servidor respondió con un código de error
      const errorMessage = error.response.data?.message 
        || error.response.data?.error
        || `Error ${error.response.status}: ${error.response.statusText}`;
      throw { message: errorMessage, data: error.response.data };
    } else if (error.request) {
      // La petición fue hecha pero no hubo respuesta
      throw { message: 'No se pudo conectar con el servidor. Verifica tu conexión.' };
    } else {
      // Algo pasó al configurar la petición
      throw { message: error.message || 'Error al registrar usuario' };
    }
  }
};

/**
 * Iniciar sesión
 * @param {string} email - Email del usuario
 * @param {string} password - Contraseña del usuario
 * @returns {Promise} Respuesta del servidor con token
 */
export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    
    // Guardar token en cookies
    if (response.data.token) {
      Cookies.set('auth_token', response.data.token, {
        expires: 7, // 7 días
        // secure: true solo en producción (HTTPS)
        secure: window.location.protocol === 'https:',
        sameSite: 'lax', // 'strict' puede causar problemas
      });
    }
    
    return response.data;
  } catch (error) {
    console.error('Error en loginUser:', error);
    
    if (error.response) {
      const errorMessage = error.response.data?.message 
        || error.response.data?.error
        || 'Credenciales incorrectas';
      throw { message: errorMessage };
    } else if (error.request) {
      throw { message: 'No se pudo conectar con el servidor. Verifica tu conexión.' };
    } else {
      throw { message: error.message || 'Error al iniciar sesión' };
    }
  }
};

/**
 * Cerrar sesión
 * @returns {Promise} Respuesta del servidor
 */
export const logoutUser = async () => {
  try {
    const response = await api.delete('/logout');
    
    // Eliminar token de cookies
    Cookies.remove('auth_token');
    
    return response.data;
  } catch (error) {
    // Aunque falle, eliminamos el token localmente
    Cookies.remove('auth_token');
    throw error.response?.data || { message: 'Error al cerrar sesión' };
  }
};

/**
 * Verificar si existe un token válido
 * @returns {boolean} True si existe token
 */
export const isAuthenticated = () => {
  return !!Cookies.get('auth_token');
};

/**
 * Obtener el token actual
 * @returns {string|null} Token o null
 */
export const getToken = () => {
  return Cookies.get('auth_token') || null;
};

export default api;

