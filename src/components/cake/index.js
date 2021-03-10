import React from 'react'
import { AiOutlineShoppingCart,AiOutlinePlus } from 'react-icons/ai'
import {Container,Image,Content,InfoCake,Name,Price,Cart,Plus,Icons} from './styles/cake'
function Cake(props) {
    const {imgCake,title,price}= props
    return (
        <Container>
            <Image><img src={imgCake} /></Image>
            <Content>
                <InfoCake>
                    <Name>{title}</Name>
                    <Price>$ {price}</Price>
                </InfoCake>
                <Icons>
                    <Cart><AiOutlineShoppingCart/></Cart>
                    <Plus><AiOutlinePlus/></Plus>
                </Icons>
            </Content>
        </Container>
    )
}

export default Cake
