import React from "react";
import { StylesButton1, StylesButton2, StylesNav } from "./StyleNavigation";

const navigationBar = () => {
  const links = [
    {
      name: "Job Search",
      route: "",
    },
    {
      name: "About",
      route: "",
    },
    {
      name: "Pricing",
      route: "",
    },
    {
      name: "Contact",
      route: "",
    },
  ];

  return (
    <StylesNav>
      <figure>
        <img src="https://i.ibb.co/QCmj6cc/logo.png" alt="Logo" />
      </figure>
      <ul>
        {links.map((item, index) => (
          <li key={`${item.name}-${index}`}>{item.name}</li>
        ))}
        <li>
          <StylesButton1>Login</StylesButton1>
        </li>
        <li>
          <StylesButton2>Try it free</StylesButton2>
        </li>
      </ul>
    </StylesNav>
  );
};

export default navigationBar;
