import styled from "styled-components"
import { primary, white } from "../../../constants/colors"

export const Container=styled.aside`
padding: 2rem;
min-width:30rem;
`
export const Title=styled.h3`
    font-size: 1.6rem;
    text-align:left;
    text-transform:capitalize;
    margin-top:1.5rem;
`

export const Nums=styled.div`
display: flex;
justify-content:flex-start ;
align-items: center;
margin:1.5rem 0 ;
`
export const Num=styled.span`
    margin-right:2rem;
    display: block;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    border: 1px solid ${primary};
    cursor: pointer;
    line-height:25px;
    transition:.7s;
    &:hover {
        background-color:${primary};
        color:${white}
    }
    background-color:${props=>props.active ? primary :'transparent' };
    color:${props=>props.active ? white :primary };
`
export const Check=styled.div`
padding:1rem 0;
text-align:left;
display:flex;
align-items:center;
`
export const CheckBtn=styled.input`
 cursor: pointer;

`
export const Label=styled.label`
    font-size:1.4rem ;
    opacity:.7;
    padding:0 1.5rem 0 .5rem;
    cursor: pointer;
`
export const TotalOrder=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:2rem;
`
export const Btn=styled.button`
font-size:1.4rem;
display:block;
padding:1.2rem 1.5rem;
margin-left:4rem;
border:${props=> props.color ? '1px solid '+ primary : 'none'};
border-radius:50px;
color:${props=> props.color ? primary : white};
background-color:${props=> props.color ? 'transparent' : primary};
outline:none;
margin-top:1.5rem;
cursor: pointer;
transition:.7s;
&:hover{
    box-shadow:0px 2px 4px 1px grey;
}
&:disabled{
    cursor:no-drop;
}

`
export const Error=styled.p`
    font-size:1.2rem;
    color:red;
    margin-top:2rem;

`
export const Edit=styled.div`
    margin-top:1rem;
    display:flex;
    justify-content:space-evenly;
    align-items:cemter;

`