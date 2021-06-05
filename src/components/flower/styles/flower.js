import styled from "styled-components";
import { primary } from "../../../constants/colors";

export const Box = styled.div`
  width: 230px;
  margin: 3rem;
`;
export const Img = styled.div`
  border-radius: 2px;
  overflow: hidden;
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;
export const Plus = styled.span`
  width: 30px;
  height: 30px;
  border: 2px solid silver;
  border-radius: 50%;
  svg {
    font-size: 1.5rem;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    border-color: ${primary};
  }
`;
export const Description = styled.p`
  font-size: 1.5rem;
  text-align: left;
  width: 75%;
  color: ${primary};
`;
