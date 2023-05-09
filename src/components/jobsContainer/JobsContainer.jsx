import React from "react";
import { jobs } from "../../data/data";
import JobCard from "../jobCard/JobCard";
import { StylesJobsContainer } from "./StylesJobsContainer";

const JobsContainer = () => {
  return (
    <StylesJobsContainer>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </StylesJobsContainer>
  );
};

export default JobsContainer;
