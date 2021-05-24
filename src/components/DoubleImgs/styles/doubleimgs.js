import styled from "styled-components";
import { primary, white } from "../../../constants/colors";

export const ContainerFluid = styled.section`
  width: 95%;
  max-width: 1420px;
  margin: 0 80px;
  position: relative;
  margin: 0 auto;
  border-left: 2px solid ${primary};
  border-right: 2px solid ${primary};
`;
export const Container = styled.section`
  width: 95%;
  max-width: 1200px;
  display: grid;
  margin: 0 auto;
  grid-template-rows: repeat(5, 130px);
  grid-template-columns: 40% 55%;
  grid-column-gap: 5%;
  padding: 6rem 0;
`;
export const ImageLeft = styled.div`
  grid-row: 2 / 6;
  img {
    height: 100%;
  }
`;
export const ImageRight = styled.div`
  grid-row: 1 / 4;
  img {
    height: 100%;
  }
`;
export const TitleSection = styled.div`
  grid-row: 1 / 2;
  padding: 0 70px;
`;

export const Info = styled.div`
  grid-row: 4 / 6;
  padding: 4rem;
  font-size: 1.5rem;
`;
export const Text = styled.p`
  max-width: 500px;
  line-height: 1.8;
  font-size: 1.6rem;
  color: ${primary};
  font-weight: 700;
  margin: 2rem 0;
  line-height: 1.5;
  opacity: 0.7;
  &::first-letter {
    text-transform: uppercase;
  }
`;
export const Btn = styled.button`
  padding: 1.5rem 5rem;
  background-color: ${primary};
  border: none;
  border-radius: 50px;
  outline: none;
  color: ${white};
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 1px 6px 0px #252d38ab;
  }
`;
