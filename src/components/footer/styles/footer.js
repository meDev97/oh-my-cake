import { Link } from "react-router-dom";
import styled from "styled-components";
import { primary } from "../../../constants/colors";

export const Container = styled.footer`
  color: ${primary};
  font-size: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavBar = styled.div``;
export const Media = styled.div``;
export const Subscribe = styled.div`
  text-align: center;
`;
export const List = styled(Link)`
  display: block;
  width: fit-content;
  color: ${primary};
  margin: 1rem 0;
  font-size: 1.4rem;
  text-transform: capitalize;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${primary};
    transform: scaleX(0);
    transition: 0.4s;
  }
  &:hover::before {
    transform: scaleX(1);
  }
`;
export const Form = styled.form`
  padding: 1rem;
`;
export const Subtitle = styled.p`
  opacity: 0.8;
`;
export const Input = styled.input`
  border-radius: 5rem;
  padding: 1.2rem;
  outline: none;
  border: 1px solid ${primary};
  color: ${primary};
  width: 300px;
`;
export const Submit = styled.input`
  border-radius: 5rem;
  background-color: ${primary};
  border: 1px solid ${primary};
  outline: none;
  text-transform: capitalize;
  padding: 1.2rem 2.5rem;
  color: #fff;
  margin-left: -4rem;
  cursor: pointer;
`;
export const Phone = styled.p``;
export const Location = styled.p`
  margin: 1.5rem 0;
  font-size: 1.4rem;
`;
export const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  svg {
    opacity: 0.8;
    transform: scale(1);
    transition: 0.3s ease-in;
    cursor: pointer;
    font-size: 2rem;
    &:hover {
      opacity: 1;
      transform: scale(1.1);
    }
  }
`;
