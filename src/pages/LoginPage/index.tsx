import React, { useState } from 'react';
import { useUserLoginMutation } from '../../store/api/authApi';

const LoginPage = () => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [userLogin, { data: userLoginData }] = useUserLoginMutation();

  const onClickLoginHandler = () => {
    if (!userName || !password) return;

    userLogin({
      username: userName,
      password: password,
    });
  };
  console.log(userLoginData);

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
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <label htmlFor="floatingInput">Логин</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="floatingPassword">Пароль</label>
          </div>
          <div className="checkbox mb-3"></div>
          <button
            className="w-100 btn btn-lg btn-primary"
            onClick={onClickLoginHandler}
          >
            Войти
          </button>
          <p className="mt-5 mb-3 text-muted"></p>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
