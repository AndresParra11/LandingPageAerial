import React from "react";
import vectorUbi from "../../assets/images/Vectorubi.png";
import vectorRol from "../../assets/images/Vector-Rol.png";
import { StylesJobCard } from "./StylesJobCard";

const JobCard = ({ job }) => {
  return (
    <StylesJobCard>
      <h3>{job.title}</h3>
      <section>
        <div>
          <figure>
            <img src={vectorUbi} alt="" />
          </figure>
          <p>{job.ubication}</p>
        </div>
        <div>
          <figure>
            <img src={vectorRol} alt="" />
          </figure>
          <p>{job.rol}</p>
        </div>
      </section>
    </StylesJobCard>
  );
};

export default JobCard;
