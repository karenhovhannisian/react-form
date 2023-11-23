import * as yup from "yup";
import { CompanyContactElementType } from "../ts/types/company";

export const companyContactValidationSchema = yup.object().shape({
  firstName: yup.string().required("This field is required"),
  lastName: yup.string().required("This field is required"),
  title: yup.string().required("This field is required"),
  email: yup
    .string()
    .required("This field is required")
    .email("Email must be a valid email"),
  phone: yup.string().required("This field is required"),
  address: yup.string().nullable(),
  city: yup.string().required("This field is required"),
  state: yup.string().required("This field is required"),
  country: yup.string().required("This field is required"),
  linkedinUrl: yup.string().required("This field is required"),
  notes: yup.string().nullable(),
});

export const companyContactElements: Array<CompanyContactElementType> = [
  { name: "firstName", title: "First Name", type: "string", multiline: false },
  { name: "lastName", title: "Last Name", type: "string", multiline: false },
  { name: "title", title: "title", type: "string", multiline: false },
  { name: "email", title: "email", type: "string", multiline: false },
  { name: "phone", title: "phone", type: "string", multiline: false },
  { name: "address", title: "address", type: "string", multiline: false },
  { name: "city", title: "city", type: "string", multiline: false },
  { name: "state", title: "state", type: "string", multiline: false },
  { name: "country", title: "country", type: "string", multiline: false },
  {
    name: "linkedinUrl",
    title: "linkedinUrl",
    type: "string",
    multiline: false,
  },
  { name: "notes", title: "notes", type: "string", multiline: false },
];
