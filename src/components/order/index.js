import React from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { MdDeleteForever } from 'react-icons/md'
import {Container,Name,Qte,IconLeft,IconRight,Num,Price,Delete} from './styles/order'
function Order() {
    return (
        <Container>
            <Name>banana</Name>
            <Qte>
                <IconLeft><AiOutlinePlusCircle/></IconLeft>
                <Num>1</Num>
                <IconRight><AiOutlineMinusCircle/></IconRight>
            </Qte>
            <Price>$85</Price>
            <Delete><MdDeleteForever/></Delete>
        </Container>
    )
}

export default Order
