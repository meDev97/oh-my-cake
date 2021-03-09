import React from 'react'
import { AiOutlineShoppingCart,AiOutlinePlus } from 'react-icons/ai'
import {Container,Image,Content,TitleCake,Title,Price,Cart,Plus} from './styles/cake'
function Cake(props) {
    const {imgCake,title,price}= props
    return (
        <Container>
            <Image><img src={imgCake} /></Image>
            <Content>
                <TitleCake>
                    <Title>{title}</Title>
                    <Price>${price}</Price>
                </TitleCake>
                <Cart><AiOutlineShoppingCart/></Cart>
                <Plus><AiOutlinePlus/></Plus>
            </Content>
        </Container>
    )
}

export default Cake
