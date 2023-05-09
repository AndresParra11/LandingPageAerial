import React from "react";
import { StylesSearch, StylesSearchForm } from "./StylesSearch";

const Search = () => {
  return (
    <StylesSearch>
      <h2>Search for your area of interest</h2>
      <p>Please enter your desired industry, job title, and skills</p>
      <StylesSearchForm>
        <input type="text" placeholder="Engineer, Internet and Web Industry" />
        <button type="submit">Search</button>
      </StylesSearchForm>
    </StylesSearch>
  );
};

export default Search;
