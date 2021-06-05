import { Link } from "react-router-dom";
import styled from "styled-components";
import { primary } from "../../../constants/colors";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10rem 0;
`;
export const Base = styled.div`
  text-align: center;
  padding-bottom: 3rem;
`;

export const SubTitle = styled.p`
  font-size: 1.6rem;
  color: ${primary};
  font-weight: 700;
  margin: 2.3rem 0;
  line-height: 1.5;
  opacity: 0.9;
  &::first-letter {
    text-transform: uppercase;
  }
`;
export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
export const BtnLink = styled(Link)`
  display: block;
  cursor: pointer;
  width: fit-content;
  text-transform: uppercase;
  margin: 4rem auto;
  color: ${primary};
  font-size: 1.7rem;
  opacity: 0.8;
  font-weight: 700;
  letter-spacing: 1px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 2px;
    z-index: 3;
    background-color: ${primary};
    transform: scaleX(1);
    transition: 0.7s ease-in-out;
  }
  &:hover::before {
    transform: scaleX(0.3);
  }
`;
