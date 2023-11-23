import React, { FC } from "react";
import "./get-company-form.scss";
import { Button, TextField } from "@mui/material";

interface IGetCompanyForm {
  onHandleStepClick: (index: number) => void;
}
const GetCompanyForm: FC<IGetCompanyForm> = ({ onHandleStepClick }) => {
  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onHandleStepClick(1);
  };

  return (
    <div className={"get-company-form"}>
      <form onSubmit={onHandleSubmit} className={"get-company-form--form"}>
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          multiline={false}
          rows="2"
          sx={{
            width: "80%",
          }}
        />
        <Button
          type={"submit"}
          variant="contained"
          sx={{ width: "100px" }}
          className={"get-company-form--btn"}
        >
          Next
        </Button>
      </form>
    </div>
  );
};

export default GetCompanyForm;
