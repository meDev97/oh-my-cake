import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { TiEdit } from 'react-icons/ti'
import { AiFillStar } from 'react-icons/ai'
import img from '../../images/cake.jpeg'
import Title from '../title'
import {Container,Items,Item,Image,Name,Qte,Price,Icon,Info,Star,Base,Buttons,Btn} from './styles/listCart'
import OrderBox from '../orderBox'


function ListCart({children}) {
    return (
        <Container>
            <Title>shopping cart</Title>
            <Base>
                <Items>{children}</Items>
               {/*  <OrderBox/> */}
            </Base>
            <Buttons>
                <Btn bg={true}>Checkout</Btn>  
                <Btn>clear all</Btn>
            </Buttons>
  
        </Container>
    )
}
ListCart.Item = function ListCartItem(){
    return(
        <Item>
            <Image><img src={img}/></Image>
            <Info>
                <Name>cakes chocola</Name>
                <Star><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></Star>
            </Info>
            <Qte>6/6</Qte>
            <Price>$600</Price>
            <Icon><TiEdit/></Icon>
            <Icon><FaTimes/></Icon>
        </Item>
    )
}
export default ListCart
