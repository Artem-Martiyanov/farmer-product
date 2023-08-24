import React, { useEffect } from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import features from "/src/mocks/features";
import products from "/src/mocks/products";
import { GlobalStyle } from "./styles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { AppRoute } from "/src/routes";
import MainPage from "/src/components/pages/main-page/main-page";
import Order from "/src/components/pages/order/order";

function ScrollUp() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  console.log(AppRoute.MAIN);

  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollUp />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={features} />} />
            <Route
              path={AppRoute.ORDER}
              element={<Order products={products} />}
            />
            <Route
              path={AppRoute["404"]}
              element={<h1>Извините, страница не найдена...</h1>}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
