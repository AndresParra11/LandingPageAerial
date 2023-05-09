import styled from "styled-components";

export const StylesCard = styled.article`
  width: 160px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  padding: 2.5em 1em 1em; /* Toma como referencia el tamaño de la fuente de la card. */
  border-radius: 5px;
  font-size: 0.75rem;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  h3 {
    font-size: 0.87rem;
  }
  p {
    color: #666666;
  }
`;
