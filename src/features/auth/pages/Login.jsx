import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import LoadingSpinner from '../../../components/LoadingSpinner';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { login, error, clearError } = useAuth();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [formError, setFormError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar errores al escribir
    if (formError) setFormError('');
    if (error) clearError();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validaciones básicas
    if (!formData.email || !formData.password) {
      setFormError('Por favor, completa todos los campos');
      return;
    }

    setIsLoading(true);
    
    try {
      const result = await login(formData.email, formData.password);
      
      if (result.success) {
        // Redirigir al perfil después del login exitoso
        navigate('/profile');
      } else {
        setFormError(result.error || 'Error al iniciar sesión');
      }
    } catch (err) {
      setFormError('Error al iniciar sesión. Por favor, intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingSpinner type="modern" message="Iniciando sesión..." />;
  }

  return (
    <div className="login-container">
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
      
      <div className="login-card">
        <div className="login-header">
          <h1>Iniciar Sesión</h1>
          <p>Bienvenido de nuevo</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {(formError || error) && (
            <div className="alert alert-error">
              {formError || error}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tucorreo@ejemplo.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={isLoading}
          >
            <span>{isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}</span>
          </button>
        </form>

        <div className="login-footer">
          <p>
            ¿No tienes cuenta?{' '}
            <Link to="/register" className="link">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

