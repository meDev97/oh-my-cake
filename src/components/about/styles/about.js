import { Link } from "react-router-dom";
import styled from "styled-components";
import { primary } from "../../../constants/colors";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7rem 0;
  text-align: center;
  max-width: 650px;
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
export const TextOrder = styled.p`
  font-size: 1.5rem;
  color: ${primary};
  font-weight: 900;
  margin: 3rem 0;
  line-height: 1.5;
  opacity: 1;
  &::first-letter {
    text-transform: uppercase;
  }
`;
export const Discount = styled.h5`
  font-size: 1.7rem;
  color: ${primary};
  font-weight: 700;
`;
export const LinkText = styled(Link)`
  text-decoration: underline;
  color: ${primary};
`;
export const Types = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Type = styled.div`
  position: relative;
`;
export const Item = styled.div`
  border-radius: 50%;
  margin: 2rem;
  border: 2px solid ${primary};
  width: 10rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 5rem;
    color: ${primary};
    opacity: 0.8;
  }
`;
export const Line = styled.div`
  background-color: ${primary};
  width: 15rem;
  height: 2px;
`;
export const TextItem = styled(Text)`
  position: absolute;
  bottom: -1rem;
  left: 50%;
  width: 200%;
  transform: translateX(-50%);
`;
