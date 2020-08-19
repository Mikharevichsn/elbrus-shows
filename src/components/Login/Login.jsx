import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Form, Row, Col } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/action';
import firebase from '../../FireBaseConnection';

import { useInputs, submit } from '../Input/Input';

const { Button } = require('react-bootstrap');

const Login = () => {
  const [inputs, setInputs] = useInputs({
    email: 'qwe@mail.ru',
    password: '123456',
  });
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
              value={inputs.email}
              onChange={setInputs}
            ></Input>
            <Input
              type="password"
              placeholder="password"
              name="password"
              value={inputs.password}
              onChange={setInputs}
            ></Input>
            <Button
              type="submit"
              onClick={async (e) => {
                e.preventDefault();
                const loginData = await submit(inputs, 'signInWithPassword');
                console.log('loginData> ', loginData);
                const ref = firebase.database().ref('users');
                ref
                  .orderByChild('localId')
                  .equalTo(loginData.localId)
                  .once('value', function (snapshot) {
                    console.log(snapshot.val());
                    const userFromFireBase = snapshot.val();
                    const user = {
                      localId: loginData.localId,
                      displayName: loginData.displayName,
                    };
                    for (let key in userFromFireBase) {
                      user.IDuserInCollectionFB = key;
                      if (user.localId !== userFromFireBase[key].localId) {
                        console.log(
                          'Почему-то не совпадают данные localId авторизации FireBase и localId юзера вернувшегося из коллекции Users FireBase'
                        );
                      }
                      if (userFromFireBase.wishList === undefined) {
                        user.wishList = [];
                      }
                      if (userFromFireBase.favoriteList === undefined) {
                        user.favoriteList = [];
                      }
                    }
                    document.cookie = `user_auth_id=${loginData.localId}; max-age=${loginData.expiresIn}`;
                    document.cookie = `user_id=${user.IDuserInCollectionFB}; max-age=${loginData.expiresIn}`;
                    dispatch(setUser(user));
                  });
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
