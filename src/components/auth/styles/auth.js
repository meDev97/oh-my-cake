import { Link } from "react-router-dom";
import styled from "styled-components";
import { primary, white } from "../../../constants/colors";
import bgAuth from "../../../images/bg-auth.jpeg";
export const Container = styled.section`
  background: url(${bgAuth}) center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: relative;
`;
export const Base = styled.div`
  width: 500px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10rem;
  background-color: #fdf3e9;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px grey;
  padding: 0 5rem;
  @media (max-width: 768px) {
    left: 1rem;
  }
  @media (max-width: 500px) {
    left: 1rem;
    right: 1rem;
    width: 95%;
    padding: 0 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  width: 150px;
  height: 100px;
  margin: 3rem auto;
  cursor: pointer;
`;
export const Input = styled.input`
  padding: 1.2rem;
  font-size: 1.5rem;
  margin: 1rem 0;
  outline: none;
  border: 1px solid ${(props) => (props.error ? "red" : primary)};
  &:focus {
    box-shadow: 0px 2px 4px 1px grey;
  }
`;
export const Submit = styled.input`
  padding: 1.3rem;
  font-size: 1.5rem;
  margin: 1rem 0;
  outline: none;
  background-color: ${primary};
  color: ${white};
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s;
  border: none;

  &:hover {
    box-shadow: 0px 2px 4px 1px grey;
  }
`;
export const Text = styled.p`
  margin-top: 2rem;
  margin-bottom: 5rem;
  font-size: 1.4rem;
`;
export const LinkAuth = styled(Link)`
  margin-left: 1rem;
  color: blue;
  &:hover {
    text-decoration: underline;
  }
`;
export const SpanError = styled.span`
  font-size: 1.2rem;
  padding: 0 1rem;
  color: red;
`;
