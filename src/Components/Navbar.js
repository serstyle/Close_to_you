import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/navbar.css';

export default function Navbar() {
  return (
    <div className="main-nav">
      <ul>
        <li>
          <NavLink activeClassName="selected" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/poi">
            What to do ?{' '}
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/hotel">
            Where to sleep ?
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
