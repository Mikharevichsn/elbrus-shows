import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Form, Row, Col } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/action';
import firebase from '../../FireBaseConnection';

import { useInputs, submit } from '../Input/Input';

const { Button } = require('react-bootstrap');

const Login = () => {
  const [inputs, setInputs] = useInputs({ email: '', password: '' });
  const dispatch = useDispatch();
  // const userRef = firebase.database().ref('users/-MF-RBlqqh4xVvu_AL-5');
  // userRef.once('value').then((data) => (data.val()));

  return (
    <>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <Form>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              onChange={setInputs}
            ></Input>
            <Input
              type="password"
              placeholder="password"
              name="password"
              onChange={setInputs}
            ></Input>
            <Button
              type="submit"
              onClick={async (e) => {
                e.preventDefault();
                const loginData = await submit(inputs, 'signInWithPassword');
                console.log(loginData);
                
                const ref = firebase.database().ref('users');
                ref
                  .orderByChild('localId')
                  .equalTo(loginData.localId)
                  .once('child_added', function (snapshot) {
                    console.log(snapshot.val());
                  });

                /////!!!!
                // const userRef = firebase.database().ref('users');
                // dispatch(setUser(user))
              }}
            >
              Submit
            </Button>
          </Form>
          <Link className="link" to="/registration">
            <Button>Регистрация</Button>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default Login;
