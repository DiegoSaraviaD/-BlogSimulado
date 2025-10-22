import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../services/authService';
import LoadingSpinner from '../../../components/LoadingSpinner';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    document_number: '',
    name: '',
    paternal_lastname: '',
    maternal_lastname: '',
    email: '',
    phone: '',
    user_name: '',
    password: '',
    confirmPassword: '',
    document_type_id: 1,
    country_id: 179, // Peru por defecto
    account_statement: true,
  });
  
  const [formError, setFormError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Limpiar errores al escribir
    if (formError) setFormError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validaciones
    if (formData.password !== formData.confirmPassword) {
      setFormError('Las contraseñas no coinciden');
      return;
    }

    if (formData.password.length < 8) {
      setFormError('La contraseña debe tener al menos 8 caracteres');
      return;
    }

    setIsLoading(true);
    setFormError('');
    
    try {
      // Preparar datos para el backend (sin confirmPassword)
      const { confirmPassword, ...dataToSend } = formData;
      
      // Agregar last_session con fecha actual
      const registrationData = {
        ...dataToSend,
        last_session: new Date().toISOString().split('T')[0],
      };

      await registerUser(registrationData);
      
      setSuccessMessage('¡Registro exitoso! Redirigiendo al inicio de sesión...');
      
      // Redirigir al login después de 2 segundos
      setTimeout(() => {
        navigate('/login');
      }, 2000);
      
    } catch (err) {
      console.error('Error en el registro:', err);
      
      // Mostrar el error específico del backend o un mensaje genérico
      let errorMsg = 'Error al registrar usuario. Por favor, intenta nuevamente.';
      
      if (err.message) {
        errorMsg = err.message;
      } else if (err.data && typeof err.data === 'object') {
        // Si el backend devuelve errores de validación como objeto
        const errors = Object.values(err.data).flat();
        errorMsg = errors.join('. ');
      }
      
      setFormError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingSpinner type="elegant" message="Registrando usuario..." />;
  }

  return (
    <div className="register-container">
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
      
      <div className="register-card">
        <div className="register-header">
          <h1>Crear Cuenta</h1>
          <p>Completa tus datos para registrarte</p>
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          {formError && (
            <div className="alert alert-error">
              {formError}
            </div>
          )}
          
          {successMessage && (
            <div className="alert alert-success">
              {successMessage}
            </div>
          )}

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="document_number">Número de Documento</label>
              <input
                type="text"
                id="document_number"
                name="document_number"
                value={formData.document_number}
                onChange={handleChange}
                placeholder="12345678"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="user_name">Nombre de Usuario</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                placeholder="usuario123"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Juan"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="paternal_lastname">Apellido Paterno</label>
              <input
                type="text"
                id="paternal_lastname"
                name="paternal_lastname"
                value={formData.paternal_lastname}
                onChange={handleChange}
                placeholder="Pérez"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="maternal_lastname">Apellido Materno</label>
            <input
              type="text"
              id="maternal_lastname"
              name="maternal_lastname"
              value={formData.maternal_lastname}
              onChange={handleChange}
              placeholder="García"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="correo@ejemplo.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="987654321"
                required
              />
            </div>
          </div>

          <div className="form-row">
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
                minLength={8}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar Contraseña</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
                minLength={8}
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={isLoading}
          >
            <span>{isLoading ? 'Registrando...' : 'Registrarse'}</span>
          </button>
        </form>

        <div className="register-footer">
          <p>
            ¿Ya tienes cuenta?{' '}
            <Link to="/login" className="link">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

