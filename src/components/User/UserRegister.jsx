import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/action';
import { useHistory } from 'react-router-dom';

export default function UserRegister() {
  const history = useHistory();
  const [state, setState] = useState({
    email: '',
    password: '',
    userName: '',
  });

  const dispatch = useDispatch();

  return (
    <>
      <div className="user_forms-signup">
        <h2 className="forms_title">Регистрация</h2>
        {/* <pre style={{ color: 'white' }}>{JSON.stringify(state, null, 2)}</pre> */}
        <form
          className="forms_form"
          name="register"
          onSubmit={async (e) => {
            e.preventDefault();
            const API_KEY = 'AIzaSyATSj6YwarLnzR7NFPKLyRV_WfE_kkGDWM';
            const response = await fetch(
              `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
              {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                  email: state.email,
                  password: state.password,
                  firstName: state.userName,
                  displayName: state.userName,
                  returnSecureToken: true,
                }),
              }
            );
            const registerResult = await response.json();
            console.log(registerResult);
            if (
              registerResult.error &&
              registerResult.error.message === 'EMAIL_EXISTS'
            ) {
              alert('Такой Email уже занят!');
              return;
            } else if (
              registerResult.error &&
              registerResult.error.message ===
                'WEAK_PASSWORD : Password should be at least 6 characters'
            ) {
              alert('Пароль должен быть минимум 6 символов!');
              return;
            } else if (
              registerResult.error &&
              registerResult.error.message === 'INVALID_EMAIL'
            ) {
              alert('С Email-ом что-то не так!');
              return;
            } else if (registerResult.error) {
              alert('Что-то пошло не так!');
              return;
            }
            // document.cookie = `user_idTocken=${registerResult.idToken}; secure`;
            document.cookie = `user_idToken=${registerResult.idToken}; max-age=${registerResult.expiresIn}`;

            const user = {
              localId: registerResult.localId,
              displayName: registerResult.displayName,
              wishList: [],
              favoriteList: [],
            };

            dispatch(setUser(user));

            const userResponse = await fetch(
              'https://elbrus-shows.firebaseio.com/users.json', //добавление зарегистрировавшегося пользователя в коллекцию users
              {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(user),
              }
            );
            const userResult = await userResponse.json();
            console.log('userResult>>', userResult);
            document.cookie = `user_auth_id=${registerResult.localId}; max-age=${registerResult.expiresIn}`;
            document.cookie = `user_id=${userResult.name}; max-age=${registerResult.expiresIn}`;
            history.push('/films');
          }}
        >
          <fieldset className="forms_fieldset">
            <div className="forms_field">
              <input
                className="forms_field-input"
                required
                type="text"
                name="userName"
                id="userName"
                placeholder="Ваше имя"
                value={state.userName}
                onChange={(e) =>
                  setState({ ...state, userName: e.target.value })
                }
              />
            </div>

            <div className="forms_field">
              <input
                className="forms_field-input"
                required
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
              />
            </div>

            <div className="forms_field">
              <input
                className="forms_field-input"
                required
                type="password"
                name="password"
                id="password"
                placeholder="password"
                value={state.password}
                onChange={(e) =>
                  setState({ ...state, password: e.target.value })
                }
              />
            </div>
          </fieldset>
          <div className="forms_buttons">
            <input
              type="submit"
              value="Зарегаться"
              className="forms_buttons-action"
            />
          </div>
        </form>
      </div>
      <script defer src="/client-login-form.js"></script>
    </>
  );
}
