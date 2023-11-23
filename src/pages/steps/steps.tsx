import React, { useState } from "react";
import "./steps.scss";
import { Step, StepLabel, Stepper } from "@mui/material";
import { steps } from "./constants";
import { getPageContentByKey } from "../../utils/getPageContentByKey";
import CreateUserForm from "../../components/page-components/steps/create-user-form/create-user-form";
import GetCompanyForm from "../../components/page-components/steps/get-company-form/get-company-form";

const Steps = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const onHandleStepClick = (index: number) => {
    setActiveStep(index + 1);
  };
  return (
    <div className={"steps"}>
      <Stepper
        activeStep={activeStep - 1}
        alternativeLabel
        sx={{ width: "200px" }}
      >
        {steps.map((step, index) => (
          <Step key={step.id} completed={index + 1 === activeStep}>
            <StepLabel
              onClick={() => onHandleStepClick(index)}
              sx={{ cursor: "pointer" }}
            >
              {/*{step.name}*/}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={"steps--pages"}>
        {getPageContentByKey({
          content: {
            "1": <GetCompanyForm onHandleStepClick={onHandleStepClick} />,
            "2": <CreateUserForm onHandleStepClick={onHandleStepClick} />,
          },
          key: activeStep.toString(),
          defaultPage: <GetCompanyForm onHandleStepClick={onHandleStepClick} />,
        })}
      </div>
    </div>
  );
};

export default Steps;
