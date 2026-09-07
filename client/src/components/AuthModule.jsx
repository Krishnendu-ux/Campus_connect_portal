import { useState } from 'react';

export default function AuthSection() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert('Login functionality coming soon!');
    } else {
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      alert('Registration functionality coming soon!');
    }
  };

  return (
    <section id="auth-section" className="auth-section">
      <div className="auth-container">
        <h2 className="auth-heading">Get Started</h2>
        <p className="auth-subheading">Sign in to your account or create a new one</p>
        <div className="auth-card">
          <h3 className="auth-title">{isLogin ? 'Welcome Back' : 'Create Account'}</h3>
          <p className="auth-subtitle">{isLogin ? 'Sign in to your Campus Connect account' : 'Join the Campus Connect Portal today'}</p>
          <form className="auth-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="auth-input-group">
                <label className="auth-label">Full Name</label>
                <input
                  type="text"
                  className="auth-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required={!isLogin}
                />
              </div>
            )}
            <div className="auth-input-group">
              <label className="auth-label">Email</label>
              <input
                type="email"
                className="auth-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@rvu.edu.in"
                required
              />
            </div>
            <div className="auth-input-group">
              <label className="auth-label">Password</label>
              <input
                type="password"
                className="auth-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={isLogin ? 'Enter your password' : 'Create a strong password'}
                required
              />
            </div>
            {!isLogin && (
              <div className="auth-input-group">
                <label className="auth-label">Confirm Password</label>
                <input
                  type="password"
                  className="auth-input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter your password"
                  required={!isLogin}
                />
              </div>
            )}
            <button type="submit" className="auth-button">{isLogin ? 'Sign In' : 'Create Account'}</button>
          </form>
          <p className="auth-footer">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span className="auth-link" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Create one' : 'Sign in'}
            </span>
          </p>
          {!isLogin && (
            <p className="auth-terms">
              By creating an account, you agree to our Terms of Service and Privacy Policy.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
