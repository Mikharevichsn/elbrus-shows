import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../public/img/logo.png';
import './style.sass';

const NavBar = () => {
  return (
    <Nav className="navbar  navbar-dark bg-dark menu">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <div>
        <NavItem className="a">
          <Link className="link" to="/films">
            Кинчики
          </Link>
        </NavItem>
        <NavItem className="a">
          <Link className="link" to="/log-in">
            Sign in
          </Link>
        </NavItem>
      </div>
    </Nav>
  );
};

export default NavBar;
