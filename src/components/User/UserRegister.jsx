import React, { useState, useEffect } from 'react';

export default function UserRegister() {
  const [state, setState] = useState({
    email: '',
    password: '',
    userName: '',
  });

  return (
    <>
      <div>
        <pre style={{ color: 'white' }}>{JSON.stringify(state, null, 2)}</pre>
        <form
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
            // document.cookie = `user_idTocken=${registerResult.idToken}; secure`;
            document.cookie = `user_idToken=${registerResult.idToken}; max-age=${registerResult.expiresIn}`;

            const user = {
              localId: registerResult.localId,
              displayName: registerResult.displayName,
              wishList: [],
              favoriteList: [],
            };

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
          }}
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Ваше имя"
            value={state.userName}
            onChange={(e) => setState({ ...state, userName: e.target.value })}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={state.password}
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </>
  );
}
