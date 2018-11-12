import React from 'react'

import Home from './Home';
import About from './About';
import Contact from './Contact';

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Navbar</a>
      </div>
      <ul className="right">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;
