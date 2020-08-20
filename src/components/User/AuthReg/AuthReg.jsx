import React from 'react';
import './style.sass';

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
          <div class="user_forms-login">
            <h2 class="forms_title">Авторизация</h2>
            <form class="forms_form">
              <fieldset class="forms_fieldset">
                <div class="forms_field">
                  <input
                    type="email"
                    placeholder="Email"
                    class="forms_field-input"
                    required
                    autofocus
                  />
                </div>
                <div class="forms_field">
                  <input
                    type="password"
                    placeholder="Пароль"
                    class="forms_field-input"
                    required
                  />
                </div>
              </fieldset>
              <div class="forms_buttons">
                <button type="button" class="forms_buttons-forgot">
                  {/* Forgot password? */}
                </button>
                <input
                  type="submit"
                  value="Войти"
                  class="forms_buttons-action"
                />
              </div>
            </form>
          </div>
          <div class="user_forms-signup">
            <h2 class="forms_title">Регистрация</h2>
            <form class="forms_form">
              <fieldset class="forms_fieldset">
                <div class="forms_field">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    class="forms_field-input"
                    required
                  />
                </div>
                <div class="forms_field">
                  <input
                    type="email"
                    placeholder="Email"
                    class="forms_field-input"
                    required
                  />
                </div>
                <div class="forms_field">
                  <input
                    type="password"
                    placeholder="Пароль"
                    class="forms_field-input"
                    required
                  />
                </div>
              </fieldset>
              <div class="forms_buttons">
                <input
                  type="submit"
                  value="Зарегаться"
                  class="forms_buttons-action"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
