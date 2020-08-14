import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 

import Content from './components/Content/Content';
import { Container, Navbar } from 'reactstrap';
import NavBar from './components/Navbar/Navbar';
import './public/app.css'
import { Route } from 'react-router-dom';
import login from './components/Login/Login';


function App() {
 
  return (
<>
    <NavBar/>
   <Container >
   
   <Route  path="/registration" component={login}/>
 <Content/>
   </Container>
   </>
  );
}

export default App;
