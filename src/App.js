import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import { Container } from 'reactstrap';

import NavBar from './components/Navbar/Navbar';
import './public/app.css';
import FilmList from './components/Films/FilmList';
import UserRegister from './components/User/UserRegister';
import Login from './components/Login/Login.jsx';
import MoreDetails from './components/Films/MoreDeralisFilm/MoreDetails';
import { useDispatch } from 'react-redux';
import { getContent } from './redux/action';
import { Main } from './components/Home/Main/Main.js';
import AuthReg from './components/User/AuthReg/AuthReg';
import MyCabinet from './components/Profile/MyCabinet/MyCabinet';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    //useEffect для загрузки контента при внедрение этого компонента
    dispatch(getContent());
  }, [dispatch]);

  return (
    <>
      <Container>
        <NavBar />
        <Switch>
          <Route path="/films/:id">
            <MoreDetails />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/films">
            <FilmList />
          </Route>
          <Route path="/MyCabinet">
            <MyCabinet />
          </Route>
          <Route path="/registration">
            <UserRegister />
          </Route>
          <Route path="/log-in">
            <AuthReg />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
