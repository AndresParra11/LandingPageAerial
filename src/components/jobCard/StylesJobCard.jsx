import styled from "styled-components";

export const StylesJobCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 270px;
  height: 200px;
  text-align: center;
  border-radius: 5px;
  font-size: 0.75rem;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  h3 {
    font-size: 1rem;
    font-weight: 400;
  }
  section {
    display: flex;
    gap: 1.5rem;
    div {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      p {
        width: 100%;
      }
    }
  }
`;
