import React, { useState } from 'react';

export default function UserRegister() {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  console.log(state);
  return (
    <>
      <div>
        <form name="register">
          <input type="email" name="email" id="email" placeholder="Email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </>
  );
}
