import { useState, useEffect } from 'react';
import { getProfile } from '../services/profileService';

/**
 * Hook personalizado para gestionar el perfil del usuario
 * @returns {Object} Estado del perfil y funciones
 */
export const useProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Cargar perfil del usuario
   */
  const fetchProfile = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getProfile();
      setProfile(data);
    } catch (err) {
      setError(err.message || 'Error al cargar el perfil');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  /**
   * Refrescar perfil
   */
  const refreshProfile = () => {
    fetchProfile();
  };

  return {
    profile,
    loading,
    error,
    refreshProfile,
  };
};


