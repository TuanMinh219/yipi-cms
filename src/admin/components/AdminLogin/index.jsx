import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '@/features/Auth/useAuth';
import './index.css';

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: '',
    rememberMe: false,
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // client-side validation
    if (!formData.usernameOrEmail || formData.usernameOrEmail.length < 3) {
      setError('Please enter a valid username or email.');
      return;
    }
    if (!formData.password || formData.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setError(null);
    setSuccess(null);
    setLoading(true);

    login({ usernameOrEmail: formData.usernameOrEmail, password: formData.password })
      .then((data) => {
        setSuccess('Login successful');
        navigate('/admin');
      })
      .catch((err) => {
        const msg = err?.response?.data?.message || err.message || 'Login failed';
        setError(msg);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <div className="admin-badge">
          <i className="fas fa-shield-halved"></i>
          <span>Admin Portal</span>
        </div>

        <h1 className="admin-login-title">Administrator Login</h1>
        <p className="admin-login-subtitle">Sign in to access the admin dashboard</p>

        {error && (
          <div className="error-message">
            <i className="fas fa-exclamation-circle"></i>
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="success-message">
            <i className="fas fa-check-circle"></i>
            <span>{success}</span>
          </div>
        )}

        <form className="admin-login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="usernameOrEmail" className="form-label">
              <i className="fas fa-user"></i>
              Username or Email
            </label>
            <input
              type="text"
              id="usernameOrEmail"
              name="usernameOrEmail"
              className="form-input"
              placeholder="Enter your admin username or email"
              value={formData.usernameOrEmail}
              onChange={handleInputChange}
              required
              autoFocus
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              <i className="fas fa-lock"></i>
              Password
            </label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className="form-input"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>
          </div>

          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="remember-me"
              name="rememberMe"
              className="form-checkbox"
              checked={formData.rememberMe}
              onChange={handleInputChange}
            />
            <label htmlFor="remember-me" className="checkbox-label">Keep me signed in</label>
          </div>

          <button type="submit" className="admin-login-btn">
            <i className="fas fa-sign-in-alt"></i>
            <span>Sign In to Admin Dashboard</span>
          </button>
        </form>

        <div className="links-section">
          <a href="/" className="link back-home">
            <i className="fas fa-home"></i>
            Back to Homepage
          </a>

          <a href="/login" className="link user-login">
            <i className="fas fa-user-circle"></i>
            Login as Student
          </a>

          <a href="/instructor/login" className="link instructor-login">
            <i className="fas fa-chalkboard-teacher"></i>
            Login as Instructor
          </a>
        </div>

        <div className="security-notice">
          <i className="fas fa-info-circle"></i>
          <p>This is a restricted area. All access attempts are logged.</p>
        </div>
      </div>
    </div>
  );
}
