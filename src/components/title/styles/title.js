import styled from "styled-components/macro";
import { primary } from "../../../constants/colors";

export const TitleSection = styled.h2`
  font-size: 3.2rem;
  font-weight: 900;
  letter-spacing: 1px;
  color: ${primary};
  &::first-letter {
    text-transform: uppercase;
  }
`;
