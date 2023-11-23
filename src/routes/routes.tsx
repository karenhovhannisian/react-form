import React from "react";
import { Route, Routes as MyRoutes } from "react-router-dom";
import { RouteType } from "../ts/types";
import BaseLayout from "../layouts/base-layout";
import Accordion from "../pages/accordion/accordion";
import Steps from "../pages/steps/steps";
import NotFound from "../pages/not-found/not-found";
import CompanyLayout from "../layouts/company-layout";

const Routes = () => {
  const routes: Array<RouteType> = [
    {
      path: "/",
      element: (
        <CompanyLayout>
          <Accordion />
        </CompanyLayout>
      ),
    },
    {
      path: "/steps",
      element: (
        <CompanyLayout>
          <Steps />
        </CompanyLayout>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  return (
    <MyRoutes>
      <Route path={"/"} element={<BaseLayout />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </MyRoutes>
  );
};

export default Routes;
