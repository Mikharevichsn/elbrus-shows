import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 

import Content from './components/Content/Content';
import { Container, Navbar } from 'reactstrap';
import NavBar from './components/Navbar/Navbar';
import './public/app.css'


function App() {
 
  return (
<>
    <NavBar/>
   <Container >
 
 <Content/>
   </Container>
   </>
  );
}

export default App;
