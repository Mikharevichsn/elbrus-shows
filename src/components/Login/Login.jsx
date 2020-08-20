import React from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/action';
import firebase from '../../FireBaseConnection';

import { useInputs, submit } from '../Input/Input';

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
      <div class="user_forms-login">
        <h2 class="forms_title">Авторизация</h2>
        <form class="forms_form">
          <fieldset class="forms_fieldset">
            <div class="forms_field">
              <input
                type="email"
                class="forms_field-input"
                placeholder="Email"
                name="email"
                required
                autofocus
                value={inputs.email}
                onChange={setInputs}
              />
            </div>
            <div class="forms_field">
              <input
                type="password"
                placeholder="Пароль"
                class="forms_field-input"
                name="password"
                value={inputs.password}
                onChange={setInputs}
                required
              />
            </div>
          </fieldset>
          <div class="forms_buttons">
            <div></div>
            <input
              type="submit"
              value="Войти"
              class="forms_buttons-action"
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
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
