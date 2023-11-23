import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { TextField } from "@mui/material";
import { companyContactState } from "../../../store/atoms/company-contact.atom";
import { useRecoilValue } from "recoil";
import { useCreateCompanyContact } from "../../../api/users-api";
import {
  companyContactElements,
  companyContactValidationSchema,
} from "../../../constants/form";
import {
  CompanyContactElementType,
  CompanyContactType,
} from "../../../ts/types/company";
import Modal from "../modal/modal";
import { useNavigate } from "react-router-dom";

const CompanyUserForm = () => {
  const companyContact = useRecoilValue(companyContactState);
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);

  const onSuccess = () => {
    setOpen(true);
  };

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

  const onHandleClose = () => {
    setOpen(false);
    navigate("/");
  };

  useEffect(() => {
    reset(companyContact);
  }, [companyContact, reset]);

  return (
    <>
      <Modal open={open} onHandleClose={onHandleClose} />
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
    </>
  );
};

export default CompanyUserForm;
