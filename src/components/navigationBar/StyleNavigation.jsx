import styled from "styled-components";

export const StylesNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 30px;
    li {
      cursor: pointer;
    }
  }
  figure {
    cursor: pointer;
  }
`;

export const StylesButton1 = styled.button`
  background-color: white;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 400;
  padding: 10px 15px;
  &:hover {
    background-color: #74b3a7;
    border: 1px solid #74b3a7;
    color: #fff;
    cursor: pointer;
  }
`;

export const StylesButton2 = styled.button`
  background-color: #24b26b;
  border: 1px solid #24b26b;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  padding: 10px 15px;
  &:hover {
    background-color: white;
    color: #24b26b;
    cursor: pointer;
  }
`;
