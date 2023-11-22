import { atom } from "recoil";
import { CompanyContactType } from "../../pages/home/types";

export const companyContactState = atom({
  key: "board",
  default: {} as CompanyContactType | {},
});
