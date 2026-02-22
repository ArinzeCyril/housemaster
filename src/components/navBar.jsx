import React, { useState } from 'react'

export default function NavBar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [tab, setTab] = useState('login'); // 'login' or 'register'
  const [form, setForm] = useState({ email: '', password: '', name: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setMessage('Please fill in all required fields.');
      return;
    }
    if (tab === 'register' && !form.name) {
      setMessage('Please enter your name.');
      return;
    }
    setMessage(tab === 'login'
      ? `Welcome back! (Demo: login is not wired to a backend yet)`
      : `Account created for ${form.name}! (Demo: registration is not wired to a backend yet)`
    );
  };

  return (
    <>
      <nav>
        <h1
          className='pointer'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Housemaster.
        </h1>
        <div className='nav-content'>
          <ul className='nav-list'>
            <li><a href="#home">Home</a></li>
            <li><a href="#properties">Properties</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#agent">Agent</a></li>
          </ul>
          <button className='nav-link-btn pointer' onClick={() => { setShowLoginModal(true); setMessage(''); }}>
            Login / Register
          </button>
        </div>
      </nav>

      {showLoginModal && (
        <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
          <div className="modal-card auth-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close pointer" onClick={() => setShowLoginModal(false)}>✕</button>
            <h2>Housemaster Account</h2>
            <div className="auth-tabs">
              <button
                className={`auth-tab pointer ${tab === 'login' ? 'auth-tab-active' : ''}`}
                onClick={() => { setTab('login'); setMessage(''); }}
              >
                Login
              </button>
              <button
                className={`auth-tab pointer ${tab === 'register' ? 'auth-tab-active' : ''}`}
                onClick={() => { setTab('register'); setMessage(''); }}
              >
                Register
              </button>
            </div>
            <form className="auth-form" onSubmit={handleSubmit}>
              {tab === 'register' && (
                <div className="auth-field">
                  <label htmlFor="auth-name">Full Name</label>
                  <input id="auth-name" name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} />
                </div>
              )}
              <div className="auth-field">
                <label htmlFor="auth-email">Email</label>
                <input id="auth-email" name="email" type="email" placeholder="you@email.com" value={form.email} onChange={handleChange} />
              </div>
              <div className="auth-field">
                <label htmlFor="auth-password">Password</label>
                <input id="auth-password" name="password" type="password" placeholder="••••••••" value={form.password} onChange={handleChange} />
              </div>
              {message && <p className="auth-message">{message}</p>}
              <button className="modal-btn modal-btn-primary pointer" type="submit">
                {tab === 'login' ? 'Login' : 'Create Account'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
