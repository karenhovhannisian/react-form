import React from "react";
import { Button } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { companyContactState } from "../../../store/atoms/company-contact.atom";

const AccordionPage3 = () => {
  const setCompanyContact = useSetRecoilState(companyContactState);

  return (
    <div className={"accordion-page-2"}>
      <Button type={"submit"} variant="contained" form="company-contact-form">
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
  );
};

export default AccordionPage3;
