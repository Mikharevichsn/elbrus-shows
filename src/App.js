import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Content from './components/Content/Content';
import { Container } from 'reactstrap';

import NavBar from './components/Navbar/Navbar';
import './public/app.css';
import FilmList from './components/Films/FilmList';
import UserRegister from './components/User/UserRegister';
import Login from './components/Login/Login.jsx';
import MoreDetails from './components/Films/MoreDeralisFilm/MoreDetails';
import { useDispatch, useSelector } from 'react-redux';
import { getContent } from './redux/action';
import UserInfo from './components/User/UserInfo';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    //useEffect для загрузки контента при внедрение этого компонента
    dispatch(getContent());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <UserInfo />
      <Container>
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
          <Route path="/registration">
            <UserRegister />
          </Route>
          <Route path="/">
            <Content />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
