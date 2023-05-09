import React from "react";
import NavigationBar from "../navigationBar/navigationBar";
import { StylesHeader } from "./StylesHeader";
import Banner from "../banner/Banner";

const Header = () => {
  return (
    <StylesHeader>
      <NavigationBar />
      <Banner></Banner>
    </StylesHeader>
  );
};

export default Header;
