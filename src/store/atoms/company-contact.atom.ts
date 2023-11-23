import { atom } from "recoil";
import { CompanyContactType } from "../../ts/types/company";

export const companyContactState = atom({
  key: "board",
  default: {} as CompanyContactType | {},
});
