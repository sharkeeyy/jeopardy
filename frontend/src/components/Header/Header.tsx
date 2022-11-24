import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Header():JSX.Element {
  return (
    <div>
      <NavLink to="/main">Jeopardy</NavLink><br />
      <NavLink to="/main">Game</NavLink>
      <NavLink to="/results">Results</NavLink>
      <NavLink to="/registration">Registration</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/logout">Logout</NavLink>
      <Outlet />
    </div>
  );
}

export default Header;
