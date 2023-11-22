import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  CompanyContactElementType,
  CompanyContactType,
} from "../../../pages/home/types";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import {
  companyContactElements,
  companyContactValidationSchema,
} from "../../../pages/home/constants/form";
import { TextField } from "@mui/material";
import { companyContactState } from "../../../store/atoms/company-contact.atom";
import { useRecoilValue } from "recoil";
import { useCreateCompanyContact } from "../../../api/users-api";

const AccordionPage2 = () => {
  const companyContact = useRecoilValue(companyContactState);

  const onSuccess = () => {};

  const onError = () => {};

  const { mutate } = useCreateCompanyContact(onSuccess, onError);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<CompanyContactType>({
    resolver: yupResolver(companyContactValidationSchema),
    defaultValues: {},
  });

  const onHandleFormSubmit = (formData: CompanyContactType) => {
    mutate(formData);
  };

  useEffect(() => {
    reset(companyContact);
  }, [companyContact, reset]);

  return (
    <div className={"accordion-page-2"}>
      <form
        id="company-contact-form"
        className={"company-contact-form"}
        onSubmit={handleSubmit(onHandleFormSubmit)}
      >
        <div className={"company-contact-form--elements"}>
          {companyContactElements.map(
            (element: CompanyContactElementType, index) => (
              <div className={"form-input"} key={index}>
                <label htmlFor={element.name} className={"form-input--label"}>
                  {element.title}
                </label>
                <Controller
                  name={element.name}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      id="outlined-multiline-static"
                      multiline={element.multiline}
                      rows={4}
                      value={value || ""}
                      type={element.type}
                      onChange={onChange}
                    />
                  )}
                />
                <span className={"form-input--error"}>
                  {errors[element.name]?.message}
                </span>
              </div>
            ),
          )}
        </div>
      </form>
    </div>
  );
};

export default AccordionPage2;
