import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <NavLink exact to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/About">About</NavLink>
        </div>
        <div>
          <NavLink to="/Contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
