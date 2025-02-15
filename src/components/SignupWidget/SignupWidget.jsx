"use client";

import './SignupWidget.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const SignupWidget = ({ title, content, simulateNetworkRequestTime }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }
    try {
      setBusy(true);
      await new Promise((resolve) => setTimeout(resolve, simulateNetworkRequestTime));
      setMessage(`Thanks for subscribing, ${email}!`);
      setIsSubscribed(true);
    } finally {
      setBusy(false);
    }
  };

  return (
    <form data-testid="signupWidget" className="signup-widget" onSubmit={handleSubmit} autoComplete="off">
      <h2 data-testid="signupWidgetTitle">{title}</h2>
      {isSubscribed ? (
        <p data-testid="signupWidgetMessage" className="message">
          {message}
        </p>
      ) : (
        <>
          <p data-testid="signupWidgetContent">{content}</p>
          <div className="input-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-testid="signupWidgetInput"
              required
              placeholder="Enter your email"
              disabled={busy}
            />
            <button
              type="submit"
              data-testid="signupWidgetButton"
              disabled={busy}
            >
              {busy ? 'Joining...' : 'Join'}
            </button>
          </div>
          {message && !isSubscribed && <p className="error-message">{message}</p>}
        </>
      )}
    </form>
  );
};

SignupWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  simulateNetworkRequestTime: PropTypes.number,
};

SignupWidget.defaultProps = {
  simulateNetworkRequestTime: 2000,
};

export default SignupWidget;
