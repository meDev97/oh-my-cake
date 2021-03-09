import styled from "styled-components";
import { primary } from "../../../constants/colors";

export const Line = styled.div`
    position:fixed;
    width:1px;
    height:calc(100vh - 6.4rem);
    bottom: 0;
    background-color:${primary};
    ${(props) => !props.left ? 'left:55px' : 'right:55px'}
`
export const Icons = styled.div`
    display:flex;
    flex-direction:column;
`