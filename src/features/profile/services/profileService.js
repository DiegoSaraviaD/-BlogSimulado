import api from '../../auth/services/authService';

/**
 * Obtener perfil del usuario autenticado
 * El backend identifica automáticamente al usuario mediante el token
 * @returns {Promise} Datos del perfil del usuario
 */
export const getProfile = async () => {
  try {
    const response = await api.get('/profile');
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Error al obtener el perfil' };
  }
};

/**
 * Actualizar perfil del usuario (si el backend lo permite)
 * @param {Object} profileData - Datos a actualizar
 * @returns {Promise} Respuesta del servidor
 */
export const updateProfile = async (profileData) => {
  try {
    const response = await api.put('/profile', profileData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Error al actualizar el perfil' };
  }
};



