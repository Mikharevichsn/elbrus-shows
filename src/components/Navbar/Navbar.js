import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../public/img/logo.png';
import './style.sass';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const user = useSelector((state) => state.user);
  return (
    <Nav className="navbar  navbar-dark bg-dark menu">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <NavItem className="a">
        <Link className="link" to="/registration">
          Регистрация
        </Link>
      </NavItem>
      <NavItem className="a">
        <Link className="link" to="/films">
          Кинчики
        </Link>
      </NavItem>
      {user.localId && (
        <NavItem className="a">
          <Link className="link" to="/MyCabinet">
            Мой кабинет
          </Link>
        </NavItem>
      )}
      <NavItem className="a">
        <Link className="link" to="/login">
          Войти
        </Link>
      </NavItem>
      <NavItem className="a">
        <Link className="link" to="/log-in">
          new Регистрация
        </Link>
      </NavItem>
    </Nav>
  );
};

export default NavBar;
