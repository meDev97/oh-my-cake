import React from 'react'
import { Btn, TotalOrder, Check,CheckBtn,Label } from '../orderBox/style/orderBox';
import Title from '../title'
import {Container,Form,Inputs,Input,TitleTotal,LabelTitle} from './styles/placeOrder';

function PlaceOrder() {
    return (
        <Container>
            <Title>place an order</Title>
            <Form>
                <Inputs>
                    <Input type='text' placeholder='Name'/>
                    <Input type='text' placeholder='Surname'/>
                    <Input type='text' placeholder='Phone number'/>
                    <Input type='email' placeholder='Email'/>
                </Inputs>
                <LabelTitle>Delivery method :</LabelTitle>
                <Check>
                    <CheckBtn type='radio' name='order' id='courier'></CheckBtn>
                    <Label htmlFor='courier'>courier</Label>
                    <CheckBtn type='radio' name='order' id='pickup'></CheckBtn>
                    <Label htmlFor='pickup'>pickup</Label>
                </Check>
                <Input type='text' placeholder='Delivery address' style={{width:'100%'}}/>
                <LabelTitle>payment method :</LabelTitle>
                <Check>
                    <CheckBtn type='radio' name='payment' id='cash'></CheckBtn>
                    <Label htmlFor='cash'>cash</Label>
                    <CheckBtn type='radio' name='payment' id='card'></CheckBtn>
                    <Label htmlFor='card'>card to the courier</Label>
                    <CheckBtn type='radio' name='payment' id='online'></CheckBtn>
                    <Label htmlFor='online'>online payment (5% discount)</Label>
                </Check>
                <TotalOrder>
                    <TitleTotal>total : $</TitleTotal>
                    <Btn>place an order</Btn>
                </TotalOrder>
            </Form>
        </Container>
    )
}

export default PlaceOrder
