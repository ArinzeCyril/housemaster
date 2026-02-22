import React, { useState } from 'react';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // 'success' | 'error' | ''

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setEmail('');
  };

  return (
    <div className="nl">
      <h1>Newsletter</h1>
      <p>Get Notified Instantly for New Listings</p>
      <form className="nl-form" onSubmit={handleSubscribe}>
        <input
          className="nl-inp-txt"
          type="text"
          placeholder="Enter Your Email..."
          value={email}
          onChange={e => { setEmail(e.target.value); setStatus(''); }}
        />
        <input className="nl-inp-sub pointer" type="submit" value="Subscribe" />
      </form>
      {status === 'success' && (
        <p className="nl-feedback nl-success">🎉 You're subscribed! We'll notify you of new listings.</p>
      )}
      {status === 'error' && (
        <p className="nl-feedback nl-error">⚠️ Please enter a valid email address.</p>
      )}
    </div>
  )
}

export default NewsLetter