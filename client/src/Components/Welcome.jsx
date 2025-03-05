import React from 'react';
import { useLocation } from 'react-router-dom';

const Welcome = () => {
  const location = useLocation();
  const user = location.state ? location.state.user : 'Guest';

  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <p>You are now logged in.</p>
    </div>
  );
};

export default Welcome;

