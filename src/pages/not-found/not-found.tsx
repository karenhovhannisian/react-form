import React from "react";
import "./not-found.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={"not-found-page"}>
      <h1>Page Not Found</h1>
      <Button>
        <Link to={"/"}>Go Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
