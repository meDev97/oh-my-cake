import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import * as colors from "../../../constants/colors";
export const Container = styled.header`
  display: flex;
  font-size: 1.6rem;
  align-items: center;
  justify-content: space-between;
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
  @media (max-width: 768px) {
    display: none;
  }
`;
export const NavMobile = styled.ul`
  display: none;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.primary};
  @media (max-width: 768px) {
    display: flex;
  }
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
export const ListMobile = styled(NavLink)`
  color: ${colors.secondary};
  font-size: 4rem;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${colors.secondary};
    transform: scaleX(0);
    transition: 0.4s;
  }
  &:hover::before,
  &.active::before {
    transform: scaleX(1);
  }
`;
export const CartItems = styled.div`
  cursor: pointer;
  svg {
    font-size: 2rem;
    margin-left: 2rem;
  }
`;

// burger menu
export const Menu = styled.div`
  display: none;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  border-radius: 2px;
  @media (max-width: 768px) {
    display: block;
  }
`;
export const Line = styled.span`
  width: 20px;
  height: 3px;
  margin: 5px;
  display: block;
  background-color: black;
`;
export const Back = styled.span`
  font-size: 3rem;
  color: ${colors.secondary};
  cursor: pointer;
`;
