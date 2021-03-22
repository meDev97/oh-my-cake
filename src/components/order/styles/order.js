import styled from "styled-components";
import { primary } from "../../../constants/colors";

export const Container = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:1rem 0;
width:250px;
`
export const Name = styled.div`
    font-size:1.4rem;
    color:${primary};
    text-transform:capitalize;
    opacity:.7;
`
export const Qte = styled.p`
    display:flex;
`
export const IconLeft = styled.div`
    cursor: pointer;
    opacity:.7;
    transition:.7s;
    svg{
        font-size:1.4rem;
       
    }
    &:hover{
        opacity:1;
    }
`
export const IconRight = styled.div`
    cursor: pointer;
    opacity:.7;
    transition:.7s;
    svg{
        font-size:1.4rem;
    }
    &:hover{
        opacity:1;
    }
`
export const Num = styled.p`
font-size:1.2rem;
margin:0 5px;
opacity:.7;
`
export const Price = styled.p`
font-size:1.2rem;
opacity:.7;
`
export const Delete = styled.div`
    cursor: pointer;
    opacity:.7;
    transition:.7s;
    svg{
        font-size:2rem;
        color:grey;
        }
    &:hover{
        opacity:1;
    }
`