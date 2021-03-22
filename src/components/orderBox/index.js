import React from 'react';
import Order from '../order';

import {Container, Title, Nums, Num,Btn,Check,Label,TotalOrder,CheckBtn} from './style/orderBox'
function OrderBox({price}) {
    return (
        <Container>
            <Title>cakes in a box</Title>
            <Nums>
                <Num>3</Num>
                <Num>6</Num>
                <Num>9</Num>
            </Nums>
            <Title>Need flowers?</Title>
            <Check>
                <CheckBtn type='radio' name='flower' id='yes'></CheckBtn>
                <Label htmlFor='yes'>yes</Label>
                <CheckBtn type='radio' name='flower' id='no'></CheckBtn>
                <Label htmlFor='no'>no</Label>
            </Check>
            <Title>your order</Title>
            <Order/>
            <Order/>
            <Order/>
            <TotalOrder>
                <Title>total: ${price}</Title>
                <Btn>pick up the box</Btn>
            </TotalOrder>
        </Container>
    )
}

export default OrderBox
