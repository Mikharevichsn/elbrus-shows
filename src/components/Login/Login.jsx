import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Form, Row, Col } from 'reactstrap';

import { useInputs, submit } from '../Input/Input';

const { Button } = require('react-bootstrap');

const Login = () => {
  const [inputs, setInputs] = useInputs({ email: '', password: '' });

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
              onClick={(e) => {
                e.preventDefault();
                submit(inputs, 'signInWithPassword');
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
