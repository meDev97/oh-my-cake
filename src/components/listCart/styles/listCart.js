import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { primary, white } from "../../../constants/colors";

export const Container =styled.section`
    margin:100px auto;
    text-align:center;
    max-width:1200px;
`
export const Base =styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:5rem;
`
export const Items =styled.ul`
    width:100%;
`
export const Item =styled.li`
    margin:2rem 0;
     display:flex;
     justify-content:space-between;
     align-items:center;
`
export const Image =styled.div`
    width:100px;
`
export const Info =styled.div`
    display:flex;
    flex-direction:column;
`
export const Name =styled.h4`
    font-size:1.8rem;
    margin-bottom:1rem;
`
export const Star =styled.div`
    display:flex;
    svg{
        color:#ffd800;
        font-size:1.8rem;

    }
`
export const Qte =styled.span`
    font-size:1.6rem;
`
export const Price =styled.span`
    font-size:1.6rem;
`
export const Icon =styled.div`
    cursor: pointer;
    transition:.3s;
    svg{
        font-size:2rem;
        color:grey;
    }
    &:hover svg{
        color:${primary};

    }
`
export const Edit =styled(Icon)`

`
export const Buttons =styled.div`
    display:flex;
    justify-content:flex-end;
`
export const Btn =styled.button`
font-size:1.4rem;
display:block;
margin-left:2rem;
border:1px solid ${primary};
background-color:${props=>props.bg ? primary : 'transparent'};
color:${props=>props.bg ? white : primary};
border-radius:50px;
outline:none;
cursor: pointer;
padding:.8rem 2rem;
white-space:nowrap;
transition:.7s;
&:hover{
    box-shadow:0px 2px 4px 1px grey;
}
`
export const EditOrder =styled.div`
    padding:3rem 1rem;
    border-left:2px solid #e8e8e8;
    margin-left:2rem;

`
