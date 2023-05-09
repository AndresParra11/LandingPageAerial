import styled from "styled-components";
import vector from "../../assets/images/Vector-Search.png";

export const StylesSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
  h2 {
    font-size: 2rem;
    padding-bottom: 5 px;
  }
  p {
    color: #666666;
    padding-bottom: 25px;
  }
`;

export const StylesSearchForm = styled.form`
  display: flex;
  gap: 15px;
  input {
    width: 380px;
    height: 40px;
    border: 1px solid #666666;
    border-radius: 5px;
    padding: 0 10px;
    font-size: 0.87rem;
    color: #999999;
    text-align: center;
    ::placeholder {
      background-image: url("${vector}");
      background-repeat: no-repeat;
    }
  }
  button {
    font-size: 0.87rem;
    width: 100px;
    height: 40px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;

    &:hover {
      cursor: pointer;
      background-color: #666666;
      color: black;
    }
  }
`;
