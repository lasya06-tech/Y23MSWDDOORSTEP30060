import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../users.json'; // Importing the user data

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      navigate('/welcome', { state: { user: user.username } }); // Navigate to /welcome with state
    } else {
      setErrorMessage('Invalid credentials. Please register.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {errorMessage && (
  <p style={{ color: 'white', backgroundColor: 'red', padding: '10px', borderRadius: '5px' }}>
    {errorMessage}
  </p>
)}
    </div>
  );
};

export default Login;

