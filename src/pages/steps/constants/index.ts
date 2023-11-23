import { StepType } from "../types";
import { v4 as uuid } from "uuid";

const steps: Array<StepType> = [
  { id: uuid(), name: "Get company" },
  { id: uuid(), name: "Create company user" },
];

export { steps };
