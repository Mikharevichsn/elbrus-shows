import React, { useState } from 'react';
import './style.sass';
import UserRegister from '../UserRegister';
import Login from '../../Login/Login';

export default function AuthReg() {
  const [classForm, setClassForm] = useState('');

  return (
    <section className="user">
      <div className="user_options-container">
        <div className="user_options-text">
          <div className="user_options-unregistered">
            <h2 className="user_unregistered-title">Еще нет аккаунта?</h2>
            <p className="user_unregistered-text">
              Зарегистрируйся и сохраняй в закладки кинчики, которые планируешь
              посмотреть ;-)
            </p>
            <button
              className="user_unregistered-signup"
              id="signup-button"
              onClick={() => {
                setClassForm('bounceLeft');
              }}
            >
              Зарегистрироваться
            </button>
          </div>

          <div className="user_options-registered">
            <h2 className="user_registered-title">Уже есть аккаунт?</h2>
            <p className="user_registered-text">
              Круто! Авторизуйся и будет тебе Щасье!
            </p>
            <button
              className="user_registered-login"
              id="login-button"
              onClick={() => {
                setClassForm('bounceRight');
              }}
            >
              Войти
            </button>
          </div>
        </div>

        <div
          className={`user_options-forms ${classForm}`}
          id="user_options-forms"
        >
          <Login />
          <UserRegister />
        </div>
      </div>
    </section>
  );
}
