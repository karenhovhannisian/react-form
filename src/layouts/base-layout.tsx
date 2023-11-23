import React, { FC } from "react";
import Header from "../components/templates/header/header";
import { Outlet } from "react-router-dom";

interface IBaseLayout {}
const BaseLayout: FC<IBaseLayout> = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default BaseLayout;
