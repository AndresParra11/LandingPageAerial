// Contenedor principal de la aplicación. Va a contener todos los componentes.
import React from "react";
import Header from "../header/Header";
import Main from "../main/Main";
import GlobalStyle from "./StylesApp";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
};
