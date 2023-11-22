import { ReactNode } from "react";

export type AccordionOptionsType = {
  id: string;
  name: string;
  page: ReactNode;
};

export type CompanyContactType = {
  companyId?: number;
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  phone: string;
  address?: null | string; // Assuming the address can be either a string or null
  city: string;
  state: string;
  country: string;
  linkedinUrl: string;
  notes?: null | string; // Assuming the notes can be either a string or null
};

export type CompanyContactElementType = {
  name: keyof CompanyContactType;
  title: string;
  placeholder?: string;
  type: string;
  multiline: boolean;
};
