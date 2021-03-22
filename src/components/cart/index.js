import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {TotalOrder,Title,Btn} from '../orderBox/style/orderBox'
import {Container,Items,Item,Image,Name,Info,Price,Icon} from './styles/cart'
import ImgCart from '../../images/cake.jpeg'
function Cart({children}) {
    return (
        <Container>
            <Items>
                {children}
            </Items>
            <TotalOrder>
                <Title>total: $522</Title>
                <Btn to='/checkout'>view cart</Btn>
            </TotalOrder>
        </Container>
    )
}
Cart.Item=function CartItem(){
    return(
        <Item>
            <Image><img src={ImgCart}/></Image>
            <Info>
                <Name>detail box for your cakes</Name>
                <Price>$15</Price>
            </Info>
            <Icon><FaTimes/></Icon>
        </Item>
    )
}

export default Cart
