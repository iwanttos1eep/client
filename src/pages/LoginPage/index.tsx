import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  <link href="sign-in.css" rel="stylesheet" />;
  return (
    <>
      <form action="" method="get">
        <div className="wrapper">
          <h1 className="h3 mb-3 fw-normal">Вход в аккаунт</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder=" "
            />
            <label htmlFor="floatingInput">Логин</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder=" "
            />
            <label htmlFor="floatingPassword">Пароль</label>
          </div>
          <div className="checkbox mb-3"></div>
          <Link to="/">
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Войти
            </button>
          </Link>
          <p className="mt-5 mb-3 text-muted"></p>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
