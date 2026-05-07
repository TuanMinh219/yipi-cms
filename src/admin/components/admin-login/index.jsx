import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { setAdminAuth } from '../../auth/auth.js';

export default function AdminLogin() {
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    const formData = new FormData();
    formData.append('usernameOrEmail', usernameOrEmail);
    formData.append('password', password);
    formData.append('remember-me', rememberMe);
    
    fetch('/login', {
      method: 'POST',
      body: formData
    }).then(async (response) => {
      if (response.ok) {
        // Expected server may return a JSON token; fall back to a simple flag.
        let payload = null;
        try {
          payload = await response.json();
        } catch {
          payload = null;
        }

        setAdminAuth({
          isAdmin: true,
          token: payload?.token || payload?.access_token || null,
        });

        navigate('/admin/dashboard', { replace: true });
      } else {
        const url = new URL(window.location.href);
        url.searchParams.set('error', response.status === 403 ? 'accessDenied' : 'true');
        navigate(url.pathname + url.search, { replace: true });
      }
    });
  };

  const getErrorMessage = () => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('error') === 'true') {
      return { type: 'error', message: 'Invalid credentials! Please try again.', icon: 'fa-exclamation-circle' };
    }
    if (params.get('error') === 'accessDenied') {
      return { type: 'error', message: 'Access Denied! Admin privileges required.', icon: 'fa-ban' };
    }
    if (params.get('error') === 'unauthorized') {
      return { type: 'error', message: "You don't have ADMIN role! Please use your appropriate login page.", icon: 'fa-user-lock' };
    }
    if (params.get('logout')) {
      return { type: 'success', message: 'You have been logged out successfully!', icon: 'fa-check-circle' };
    }
    return null;
  };

  const errorInfo = getErrorMessage();

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        {/* Admin Badge */}
        <div className="admin-badge">
          <i className="fas fa-shield-halved"></i>
          <span>Admin Portal</span>
        </div>

        <h1 className="admin-login-title">Administrator Login</h1>
        <p className="admin-login-subtitle">Sign in to access the admin dashboard</p>

        {/* Error/Success Messages */}
        {errorInfo && (
          <div className={`${errorInfo.type}-message`}>
            <i className={`fas ${errorInfo.icon}`}></i>
            <span>{errorInfo.message}</span>
          </div>
        )}

        {/* Form */}
        <form className="admin-login-form" onSubmit={handleSubmit}>
          {/* Username or Email Field */}
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
              required
              autoFocus
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              <i className="fas fa-lock"></i>
              Password
            </label>
            <div className="password-input-wrapper">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                className="form-input"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePassword}
                aria-label="Toggle password visibility"
              >
                <i className={`fas fa-${passwordVisible ? 'eye-slash' : 'eye'}`} id="toggleIcon"></i>
              </button>
            </div>
          </div>

          {/* Remember Me Checkbox */}
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="remember-me"
              name="remember-me"
              className="form-checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me" className="checkbox-label">Keep me signed in</label>
          </div>

          {/* Login Button */}
          <button type="submit" className="admin-login-btn">
            <i className="fas fa-sign-in-alt"></i>
            <span>Sign In to Admin Dashboard</span>
          </button>
        </form>

        {/* Links Section */}
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

        {/* Security Notice */}
        <div className="security-notice">
          <i className="fas fa-info-circle"></i>
          <p>This is a restricted area. All access attempts are logged.</p>
        </div>
      </div>
    </div>
  );
}
