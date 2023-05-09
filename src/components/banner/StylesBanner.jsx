import styled from "styled-components";

export const StylesBanner = styled.div`
  display: flex;
  width: 100%;
`;

export const StylesBannerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  h1 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 3.8rem;
    color: #333333;
  }
  p {
    text-align: justify;
  }
  div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const StylesContainerCards = styled.section`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  gap: 15px;
`;
