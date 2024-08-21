import React from 'react';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import { Col, Container, Row } from 'reactstrap';
import Header from './components/Header';
import Menus from './components/Menus';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import AddInstance from './components/AddInstance';
import AllInstances from './components/AllInstances';
import { ToastContainer } from 'react-toastify';

function App() {
  

  return (
    <>
    <Router>
      <Container>
        <Header/>
        <Row className='my-5'>

          <Col md={3}>
          <Menus></Menus>
          </Col>

          <Col md={9}>
          <Routes>
           <Route path="/" Component={AllCourses} exact></Route>
           <Route path="/add-course" Component={AddCourse} exact></Route>
           <Route path="/add-instance" Component={AddInstance} exact></Route>
           <Route path="/instances" Component={AllInstances} exact></Route>
           </Routes>
           <ToastContainer />
          </Col>

        </Row>
      </Container>
      </Router>
    </>
  );
}

export default App;
