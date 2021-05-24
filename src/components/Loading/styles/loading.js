import styled from "styled-components";
import { secondary } from "../../../constants/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 50vh;
  background-color: ${secondary};
`;
