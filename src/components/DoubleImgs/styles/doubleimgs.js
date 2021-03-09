import styled from "styled-components";
import { primary, secondary, white } from "../../../constants/colors";

export const ContainerFluid =styled.section`
width:95%;
max-width:1420px;
margin: 0 80px;
position:relative;
margin:0 auto;
border-left:2px solid ${primary};
border-right:2px solid ${primary};
`
export const Container =styled.section`
width:95%;
max-width:1200px;
display:grid;
margin:0 auto;
grid-template-rows:repeat(5,130px);
grid-template-columns:40% 55%;
grid-column-gap:5%;
padding:6rem 0 ;

`
export const Image_left =styled.div`
grid-row:2 / 6 ;
img{
    height:100%;
}
`
export const Image_right =styled.div`

grid-row:1 / 4;
img{
    height:100%;
}
`
export const Title_section =styled.div`
grid-row:1 / 2;
padding:0 70px;
`
export const Location =styled.div`
position:absolute;
`
export const Media =styled.div`
position:absolute;
`
export const Info =styled.div`
grid-row:4 / 6;
padding:60px 40px;
font-size:1.5rem;
`
export const Text =styled.p`
max-width:500px;
line-height:1.8;
margin-bottom:30px;
`
export const Btn =styled.button`
padding:1.5rem 5rem;
background-color:${primary};
border:none;
border-radius:50px;
color:${white};

`