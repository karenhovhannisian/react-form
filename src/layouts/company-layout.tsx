import React, { FC, ReactNode, useEffect } from "react";
import { useGetUsersData } from "../api/users-api";
import { useSetRecoilState } from "recoil";
import { companyContactState } from "../store/atoms/company-contact.atom";
import CircularProgress from "@mui/material/CircularProgress";

interface ICompanyLayout {
  children: ReactNode;
}

const CompanyLayout: FC<ICompanyLayout> = ({ children }) => {
  const { isLoading, data, error } = useGetUsersData();

  const setCompanyContact = useSetRecoilState(companyContactState);

  useEffect(() => {
    data &&
      setCompanyContact({
        companyId: 14588,
        firstName: "",
        lastName: "",
        email: "",
        title: data.name || "",
        phone: data.phone || "",
        address: data.street_address || "",
        city: data.city || "",
        state: data.state || "",
        country: data.country || "",
        linkedinUrl: data.linkedin_url || "",
        notes: null,
      });
  }, [data, setCompanyContact]);

  if (isLoading) {
    return (
      <div className={"base-loader"}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div className={"base-error"}>
        <p>{error?.message}</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default CompanyLayout;
