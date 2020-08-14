import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../public/img/logo.png';
import './style.sass';

const NavBar = () => {
  return (
    <Nav className="navbar  navbar-dark bg-dark menu">
      <Link to="/">
        <img className="logo" src={logo} />
      </Link>
      <NavItem className="a">
        <NavLink className="link">
          <Link to="/registration">Регистрация</Link>
        </NavLink>
      </NavItem>
      <NavItem className="a">
        <NavLink className="link">
          <Link to="/login">Login</Link>
        </NavLink>
      </NavItem>
      <NavItem className="a">
        <NavLink className="link">
          <Link to="/films">Кинчики</Link>
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default NavBar;
