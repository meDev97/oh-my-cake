import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import * as colors from "../../../constants/colors";
export const Container = styled.header`
  display: flex;
  font-size: 1.6rem;
  align-items: center;
  max-width: 1440px;
  padding: 0 20px;
  box-sizing: content-box;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${colors.secondary};
  z-index: 5;
`;
export const Logo = styled.div`
  width: 10rem;
`;
export const Nav = styled.ul`
  display: flex;
  margin-left: 20rem;
`;
export const List = styled(NavLink)`
  margin: 0 1.5rem;
  width: fit-content;
  color: ${colors.primary};
  font-size: 1.5rem;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${colors.primary};
    transform: scaleX(0);
    transition: 0.4s;
  }
  &:hover::before,
  &.active::before {
    transform: scaleX(1);
  }
`;
export const CartItems = styled.div`
  margin-left: auto;
  cursor: pointer;
  svg {
    font-size: 2rem;
    margin-left:2rem;
  }
`;
