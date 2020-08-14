import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Content from './components/Content/Content';
import { Container, Navbar } from 'reactstrap';
import NavBar from './components/Navbar/Navbar';
import FilmList from './components/Films/FilmList'
import './public/app.css';


function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Content />
        <FilmList/>
      </Container>
    </>
  );
}

export default App;
