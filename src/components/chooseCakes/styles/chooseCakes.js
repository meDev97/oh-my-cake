import { Link } from "react-router-dom";
import styled from "styled-components";
import { primary } from "../../../constants/colors";

export const Container = styled.div`
    max-width:1200px;
    margin:0 auto;
    padding:10rem 0;
`
export const Base = styled.div`
    max-width:450px;
    width:95%;
    margin:0 auto;
    text-align:center;
    padding-bottom: 3rem;
  
`
export const SubTitle = styled.div`
    font-size:1.5rem;
    padding:2rem;
`
export const Items = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`
export const BtnLink = styled(Link)`
    display: block;
    cursor: pointer;
    width: fit-content;
    text-transform: uppercase;
    margin: 4rem auto;
    color:${primary};
    font-size:1.4rem;
    position: relative;
    &::before{
        content:'';
        position: absolute;
        bottom: -3px;
        left:0;
        width:100%;
        height:1px;
        z-index:3;
        background-color:${primary};
        transform: scaleX(1);
        transition: .7s ease-in-out;
    }
    &:hover::before{
            transform: scaleX(0.3);
        }

`
