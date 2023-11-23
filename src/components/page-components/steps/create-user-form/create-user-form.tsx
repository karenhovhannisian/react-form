import React, { FC } from "react";
import "./create-user-form.scss";
import CompanyUserForm from "../../../templates/form/company-user-form";
import { Button } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { companyContactState } from "../../../../store/atoms/company-contact.atom";

interface ICreateUserForm {
  onHandleStepClick: (index: number) => void;
}
const CreateUserForm: FC<ICreateUserForm> = ({ onHandleStepClick }) => {
  const setCompanyContact = useSetRecoilState(companyContactState);

  return (
    <div className={"create-user-form"}>
      <div className={"create-user-form--inputs-block"}>
        <CompanyUserForm />
      </div>
      <div className={"create-user-form--btn-block"}>
        <Button variant="contained" onClick={() => onHandleStepClick(0)}>
          Prev
        </Button>
        <div className={"create-user-form--btn-block--form-btns"}>
          <Button
            type={"submit"}
            variant="contained"
            form="company-contact-form"
          >
            Submit
          </Button>
          <Button
            type={"submit"}
            variant="outlined"
            onClick={() => setCompanyContact({})}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateUserForm;
