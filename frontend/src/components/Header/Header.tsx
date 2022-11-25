import React from 'react';
import { NavLink, Outlet, Route } from 'react-router-dom';
import './Header.css';
import { useSelector } from 'react-redux';

import { RootState } from '../reducer/store';

function Header(): JSX.Element {
  // const name = useSelector((store: RootState) => store.userState);
  const name = true;

  return (
    (name ? (
      <div className="app__container">
        <nav className="header__nav">
          <div className="header__container">
            <ul className="header__menu">
              <li>
                <NavLink className="header__item" to="/main">
                  Jeopardy
                </NavLink>
              </li>
              <li>
                <NavLink className="header__item" to="/main">
                  Game
                </NavLink>
              </li>
              <li>
                <NavLink className="header__item" to="/results">
                  Results
                </NavLink>
              </li>
              <li>
                <NavLink className="header__item" to="/auth/logout">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Outlet />
      </div>
    ) : (
      <div className="app__container">
        <nav className="header__nav">
          <div className="header__container">
            <ul className="header__menu">
              <li>
                <NavLink className="header__item" to="/auth/registration">
                  Registration
                </NavLink>
              </li>
              <li>
                <NavLink className="header__item" to="/auth/login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink className="header__item" to="/auth/logout">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Outlet />
      </div>
    )
    )
  );
}
export default Header;
