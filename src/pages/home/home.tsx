import React, { useEffect } from "react";
import "./home.scss";
import { useGetUsersData } from "../../api/users-api";
import CircularProgress from "@mui/material/CircularProgress";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { accordionOptions } from "./constants";
import { useSetRecoilState } from "recoil";
import { companyContactState } from "../../store/atoms/company-contact.atom";

const Home = () => {
  const { isLoading, data, isError, error, isFetching } = useGetUsersData();

  const setCompanyContact = useSetRecoilState(companyContactState);

  // const [expanded, setExpanded] = useState<string | false>(false);
  //
  // const handleChange =
  //   (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
  //     setExpanded(isExpanded ? panel : false);
  //   };

  useEffect(() => {
    // setCompanyContact();
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

  return (
    <div className={"home"}>
      {accordionOptions.map((el) => (
        <Accordion
          key={el.id}
          // expanded={expanded === el.name}
          // onChange={handleChange(el.name)}
        >
          <AccordionSummary
            expandIcon={"<"}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <p>{el.name}</p>
          </AccordionSummary>
          <AccordionDetails>{el.page}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Home;