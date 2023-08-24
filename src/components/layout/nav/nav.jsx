import React from "react";
import { useLocation } from "react-router-dom";
import Button from "/src/components/ui/button/button";
import { AppRoute } from "/src/routes";
import { Link } from "react-router-dom";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <Link to={AppRoute.MAIN} key={AppRoute.MAIN}>
        Главная
      </Link>
    )
  },
  {
    to: AppRoute.ORDER,
    button: (
      <Button link={AppRoute.ORDER} key={AppRoute.ORDER}>
        Купить
      </Button>
    )
  }
];

function Nav() {
  const { pathname } = useLocation();

  return (
    <nav>
      {buttons
        .filter((button) => button.to !== pathname)
        .map((button) => button.button)}
    </nav>
  );
}

export default Nav;
