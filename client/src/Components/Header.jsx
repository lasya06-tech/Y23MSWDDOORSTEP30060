import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li><Link to="/">Home</Link></li>  {/* Link to Home page */}
        <li><Link to="/banner">Banner</Link></li>  {/* Link to Banner page */}
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/welcome">Welcome</Link></li>
        <li><Link to="/apiproduct">ApiProducts</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </div>
  );
};

export default Header;
