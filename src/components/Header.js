import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Welcome to My React App</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cats">Cats</Link></li>
          <li><Link to="/dogs">Dogs</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
