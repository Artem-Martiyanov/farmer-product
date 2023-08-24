import React from "react";
import { ReactComponent } from "/src/assets/logo.svg";
import { Text, StyledLogo, StyledLogoSpan } from "./styles";
import { AppRoute } from "/src/routes";
import { useLocation } from "react-router-dom";

// Логотип сайта с названием
function Logo() {
  const { pathname } = useLocation();
  return AppRoute.MAIN === pathname ? (
    <StyledLogoSpan>
      <ReactComponent />
      <Text>Фермерские продукты</Text>
    </StyledLogoSpan>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <ReactComponent />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;
