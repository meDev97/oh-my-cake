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
  max-width: 450px;
  margin: 0 auto;
  width: 95%;
`;
export const Text = styled.p`
  font-size: 1.6rem;
  color: ${primary};
  font-weight: 900;
  margin: 3rem 0;
  line-height: 1.5;
  opacity: 0.7;
  &::first-letter {
    text-transform: uppercase;
  }
`;
export const Discount = styled.h5`
  font-size: 1.7rem;
  color: ${primary};
  font-weight: 900;
`;
export const LinkText = styled(Link)`
  text-decoration: underline;
  color: ${primary};
`;

export const Pay = styled.div`
  padding: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Img = styled.div`
  width: 60px;
  cursor: pointer;
  filter: grayscale(1);
  opacity: 0.8;
  transition: 0.3s;
  &:hover {
    filter: grayscale(0);
    opacity: 1;
  }
`;
