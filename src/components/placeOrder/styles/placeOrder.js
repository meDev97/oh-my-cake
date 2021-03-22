import styled from "styled-components";
import { primary } from "../../../constants/colors";

export const Container = styled.section`
    margin:120px auto;
    max-width:600px;
    width:95%;
    text-align:center;
`
export const Inputs = styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;

`
export const Form = styled.form`
    text-align:left;
    margin-top:5rem;
`
export const Input = styled.input`
    width:48%;
    padding:1.5rem;
    margin:1rem 0;
    border:1px solid ${primary};
    outline:none;
    font-size:1.4rem;
    color:${primary};
    &::placeholder{
        color:grey;
    }
`
export const TitleTotal = styled.h3`
    font-size: 1.6rem;
    text-align:left;
    text-transform:capitalize;
    margin-top:1.5rem;
`
export const LabelTitle = styled.label`
    display:block;
    font-size: 1.4rem;
    text-align:left;
    text-transform:capitalize;
    margin-top:2rem;
`