import React from "react";
import { Route, Link, Switch } from "react-router-dom";

function Header({ emailUser }) {
  return (
    <header className="header">
      <div alt="Логотип проекта Место" className="header__logo"></div>
      <Switch>
        <Route path="/sign-up">
          <Link to="/sign-in" className="header__link">
            Войти
          </Link>
        </Route>
        <Route path="/sign-in">
          <Link to="/sign-up" className="header__link">
            Регистрация
          </Link>
        </Route>
        <Route path="/">
          <Link to="/sign-in" className="header__link">
            {emailUser}Выйти
          </Link>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
