import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Content from './components/Content/Content';
import { Container } from 'reactstrap';

import NavBar from './components/Navbar/Navbar';
import './public/app.css';
import FilmList from './components/Films/FilmList';
import FilmList2 from './components/Films/FilmList2';
import UserRegister from './components/User/UserRegister';
import Login from './components/Login/Login.jsx';
import MoreDetails from './components/Films/MoreDetails';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Switch>
        <Route path="/film/:id">
<MoreDetails/>
          </Route>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/films2">
            <FilmList2 />
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
