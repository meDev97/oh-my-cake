import styled from "styled-components";
import { primary, white } from "../../../constants/colors";

export const Container = styled.div`
width:200px;
`
export const Image = styled.div`
    width:200px;
`
export const Content = styled.div`
    padding: 1rem;
    display:flex;
    justify-content:space-between;
    align-items: center;
`
export const InfoCake = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:left;

`
export const Name = styled.div`
text-transform: capitalize;
font-size:1.4rem;
margin-bottom: .7rem;

`
export const Price = styled.div`
font-size:1.4rem;
font-weight:bold;
`
export const Icons = styled.div`
    display:flex;

`
export const Cart = styled.div`
    width:30px;
    height:30px;
    border:2px solid ${primary};
    border-radius:50%;
    margin-right:1rem;
    svg{
        font-size:1.5rem;
    };
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    &:hover{
        background-color:${primary};
        color:${white};
    }
`
export const Plus = styled.div`
    width:30px;
    height:30px;
    border:1px solid silver;
    border-radius:50%;
    svg{
        font-size:1.5rem;
    };
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    &:hover{
        border-color:${primary};
    }
`