import styled from "styled-components";
import { primary } from "../../../constants/colors";

export const Container = styled.section`
  padding: 7rem 0;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;
`;
export const Text = styled.p`
  font-size: 1.6rem;
  color: ${primary};
  font-weight: 900;
  margin-top: 3rem;
  line-height: 1.5;
  opacity: 0.7;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Items = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
