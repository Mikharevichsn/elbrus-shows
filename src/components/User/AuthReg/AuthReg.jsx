import React from 'react';
import './style.sass';
import UserRegister from '../UserRegister';
import Login from '../../Login/Login';

export default function AuthReg() {
  return (
    <section class="user">
      <div class="user_options-container">
        <div class="user_options-text">
          <div class="user_options-unregistered">
            <h2 class="user_unregistered-title">Еще нет аккаунта?</h2>
            <p class="user_unregistered-text">
              Зарегистрируйся и сохраняй в закладки кинчики, которые планируешь
              посмотреть ;-)
            </p>
            <button class="user_unregistered-signup" id="signup-button">
              Зарегистрироваться
            </button>
          </div>

          <div class="user_options-registered">
            <h2 class="user_registered-title">Уже есть аккаунт?</h2>
            <p class="user_registered-text">
              Круто! Авторизуйся и будет тебе Щасье!
            </p>
            <button class="user_registered-login" id="login-button">
              Войти
            </button>
          </div>
        </div>

        <div class="user_options-forms" id="user_options-forms">
          <Login />
          <UserRegister />
        </div>
      </div>
    </section>
  );
}
