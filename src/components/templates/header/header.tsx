import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={"header"}>
      <ul className={"header--menu"}>
        <li>
          {" "}
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "passive"
            }
          >
            Page 1{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/steps"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "passive"
            }
          >
            Page 2
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
