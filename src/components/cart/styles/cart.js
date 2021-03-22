import styled from "styled-components/macro";
import { primary, secondary, white } from "../../../constants/colors";

export const Container =styled.div`
    position:absolute;
    right:0;
    top:100%;
    width:350px;
    max-height:100vh;
    overflow-y:auto;
    box-shadow:0px 2px 4px 1px #e0dbd4;
    background-color:${white};
    padding: 3rem 1rem;

`
export const Items =styled.div`
`
export const Item =styled.div`
    display:flex;
    align-items:center;
    background-color:#f4efe669;
    padding:.5rem;
    margin-top:.5rem;
`
export const Image =styled.div`
    width:100px;
    
`
export const Info =styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    padding: 0 1rem;
`
export const Name =styled.p`
    padding-bottom:1rem;
`
export const Price =styled.span`
 color:grey;
`
export const Total =styled.span`
`
export const Icon =styled.div`
    width:30px;
    cursor: pointer;
    svg{
        font-size:2rem;
        color:grey;
        transition:.3s;
        &:hover{
            color:${primary}
        }
    }
`
export const Btn =styled.button`

font-size:1.4rem;
display:block;
padding:1.2rem 2.5rem;
margin-left: auto ;
border:none;
border-radius:50px;
color:${white};
background-color:${primary};
margin-top:1.5rem;
cursor: pointer;
transition:.7s;

&:hover{
    box-shadow:0px 2px 4px 1px grey;
}
`

