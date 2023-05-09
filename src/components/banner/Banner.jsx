import React from "react";
import { StylesButton1, StylesButton2 } from "../navigationBar/StyleNavigation";
import {
  StylesBanner,
  StylesBannerText,
  StylesContainerCards,
} from "./StylesBanner";
import Card from "../cards/Card";
import { agents } from "../../data/data";

const Banner = () => {
  return (
    <StylesBanner>
      <StylesBannerText>
        <h1>We support your challenge in new areas.</h1>
        <p>
          Our highly qualified headhunters, who have passed a rigorous screening
          process, will introduce you to your new career opportunity.
        </p>
        <div>
          <StylesButton2>Try it free</StylesButton2>
          <StylesButton1>Explore</StylesButton1>
        </div>
      </StylesBannerText>
      <StylesContainerCards>
        {/* Las props que se le pasan a agent son las mismas que piden en el componente Card.
            se mapea el array agents para pintar la información de cada agente en una card.
            Se le debe añadar un key único cada vez que se mapee un componente.*/}
        {agents.map((agent) => (
          <Card key={agent.id} agent={agent} />
        ))}
      </StylesContainerCards>
    </StylesBanner>
  );
};

export default Banner;
