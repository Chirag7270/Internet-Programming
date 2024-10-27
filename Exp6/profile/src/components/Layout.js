import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>&copy; 2024 VESIT </p>
      </footer>
    </div>
  );
}

export default Layout;
