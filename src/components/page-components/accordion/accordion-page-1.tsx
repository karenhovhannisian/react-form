import React from "react";
import "./accordion-page.scss";
import { Button, TextField } from "@mui/material";

const AccordionPage1 = () => {
  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit} className={"accordion-page-1"}>
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          multiline={false}
          rows="2"
          sx={{
            width: "200px",
          }}
        />
        <Button type={"submit"} variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AccordionPage1;
