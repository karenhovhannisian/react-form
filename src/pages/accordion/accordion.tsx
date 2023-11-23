import React from "react";
import "./accordion.scss";
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { accordionOptions } from "./constants";

const Accordion = () => {
  // const [expanded, setExpanded] = useState<string | false>(false);
  //
  // const handleChange =
  //   (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
  //     setExpanded(isExpanded ? panel : false);
  //   };

  return (
    <div className={"home"}>
      {accordionOptions.map((el, index) => (
        <MuiAccordion
          key={el.id}
          // expanded={expanded === el.name}
          // onChange={handleChange(el.name)}
        >
          <AccordionSummary
            expandIcon={"<"}
            aria-controls="panel1bh-content"
            id={`panel1bh-header + ${index}`}
          >
            <p>{el.name}</p>
          </AccordionSummary>
          <AccordionDetails>{el.page}</AccordionDetails>
        </MuiAccordion>
      ))}
    </div>
  );
};

export default Accordion;
