import { AccordionOptionsType } from "../types";
import { v4 as uuid } from "uuid";
import AccordionPage1 from "../../../components/page-components/accordion/accordion-page-1";
import AccordionPage2 from "../../../components/page-components/accordion/accordion-page-2";
import AccordionPage3 from "../../../components/page-components/accordion/accordion-page-3";

const accordionOptions: Array<AccordionOptionsType> = [
  {
    id: uuid(),
    name: "Section 1",
    page: <AccordionPage1 />,
  },
  {
    id: uuid(),
    name: "Section 2",
    page: <AccordionPage2 />,
  },
  {
    id: uuid(),
    name: "Section 3",
    page: <AccordionPage3 />,
  },
];

export { accordionOptions };
