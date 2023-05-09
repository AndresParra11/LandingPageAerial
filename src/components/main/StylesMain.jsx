import styled from "styled-components";

export const StylesMain = styled.main`
  background-color: #fff;
  padding: 40px 70px;
  section {
    display: flex;
    gap: 60px;
    justify-content: center;
    align-items: center;
    figure {
      width: 60%;
      &:hover {
        cursor: pointer;
      }
      img {
        width: 100%;
      }
    }
    p {
      width: 20%;
      color: #666666;
    }
  }
`;
