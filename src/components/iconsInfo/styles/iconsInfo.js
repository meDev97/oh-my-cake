import styled from "styled-components";
import { primary, secondary } from "../../../constants/colors";
export const Container = styled.div``;
export const Base = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 20%;
  ${({ left }) => (left ? "left:-11px" : "right:-11px")};
  background-color: ${secondary};
  border-radius: 50px;
  padding: 1rem 0;
`;
export const Icon = styled.span`
  padding: 1rem 0;
  svg {
    font-size: 20px;
    color: ${primary};
  }
`;
