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
  width: 100%;
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
  @media (max-width: 768px) {
    width: 7rem;
    height: 7rem;
    svg {
      font-size: 4rem;
    }
  }
  @media (max-width: 418px) {
    width: 5rem;
    height: 5rem;
    svg {
      font-size: 3rem;
    }
  }
`;
export const Line = styled.div`
  background-color: ${primary};
  width: 15rem;
  height: 2px;
`;
export const TextItem = styled(Text)`
  position: absolute;
  /* bottom: -2rem; */
  top: 70%;
  width: 120%;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 618px) {
    font-size: 15px;
  }
  @media (max-width: 418px) {
    font-size: 12px;
    width: 100%;
  }
`;
