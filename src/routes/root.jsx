import { Link } from 'react-router-dom';


export default function Root() {
  <link href="sign-in.css" rel="stylesheet"/>
  return (
    <>
    <div class="wrapper">
    <h1 class="h3 mb-3 fw-normal">Вход в аккаунт</h1>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder=" "/>
        <label for="floatingInput">Логин</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder=" "/>
        <label for="floatingPassword">Пароль</label>
    </div>
        <div class="checkbox mb-3">
        </div>
        <Link to="/client"><button class="w-100 btn btn-lg btn-primary" type="submit">Войти</button></Link><p class="mt-5 mb-3 text-muted"></p>
      </div>
      </>
  )
}