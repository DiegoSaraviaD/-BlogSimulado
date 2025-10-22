import { useAuth } from '../../auth/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../../components/LoadingSpinner';
import './Profile.css';

const Profile = () => {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  if (loading) {
    return <LoadingSpinner type="elegant" message="Cargando perfil..." />;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="profile-container">
      {/* Burbujas flotantes */}
      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <span className="avatar-text">
              {user.name?.charAt(0).toUpperCase() || 'U'}
            </span>
          </div>
          <h1>Perfil de Usuario</h1>
          <p className="profile-subtitle">Información de tu cuenta</p>
        </div>

        <div className="profile-content">
          <div className="info-section">
            <h2>Información Personal</h2>
            
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Nombre</span>
                <span className="info-value">{user.name || 'No especificado'}</span>
              </div>

              <div className="info-item">
                <span className="info-label">Nombre de Usuario</span>
                <span className="info-value">{user.user_name || 'No especificado'}</span>
              </div>

              <div className="info-item">
                <span className="info-label">Email</span>
                <span className="info-value">{user.email || 'No especificado'}</span>
              </div>

              <div className="info-item">
                <span className="info-label">Teléfono</span>
                <span className="info-value">{user.phone || 'No especificado'}</span>
              </div>

              {user.role && (
                <div className="info-item">
                  <span className="info-label">Rol</span>
                  <span className="info-value badge badge-primary">
                    {user.role.name || 'Usuario'}
                  </span>
                </div>
              )}

              {user.country && (
                <div className="info-item">
                  <span className="info-label">País</span>
                  <span className="info-value">{user.country.name || 'No especificado'}</span>
                </div>
              )}

              <div className="info-item">
                <span className="info-label">ID de Usuario</span>
                <span className="info-value">{user.id || 'N/A'}</span>
              </div>
            </div>
          </div>

          <div className="profile-actions">
            <button 
              onClick={handleLogout}
              className="btn btn-logout"
            >
              <span>Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

