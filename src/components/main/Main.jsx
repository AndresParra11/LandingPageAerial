import React from "react";
import companies from "../../assets/images/companies.png";
import Search from "../search/Search";
import { StylesMain } from "./StylesMain";
import JobsContainer from "../jobsContainer/JobsContainer";

const Main = () => {
  return (
    <StylesMain>
      <section>
        <p>Trusted by the world's leading companies</p>
        <figure>
          <img src={companies} alt="companies" />
        </figure>
      </section>
      <Search />
      <JobsContainer />
    </StylesMain>
  );
};

export default Main;
