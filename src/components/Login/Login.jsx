import { Input, Form } from 'reactstrap';
import { useInputs, submit } from '../Input/Input';
import React from 'react';

const { Button } = require('react-bootstrap');

const Login = () => {
  const [inputs, setInputs] = useInputs({ email: '', password: '' });

  return (
    <>
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
    </>
  );
};

export default Login;
