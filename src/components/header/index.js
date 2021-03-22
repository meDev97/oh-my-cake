import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {Container,Logo,Nav,CartItems,List} from './styles/header'
import LogoImg from '../../images/logo-cake.png'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Cart from '../cart'
function Header() {
    const [showCart, setShowCart] = useState(false)
    useEffect(() => {
        
    }, [])
    return (
        <Container>
                <Logo><Link to='/'><img src={LogoImg}/></Link></Logo>
                <Nav>
                    <List activeClassName='active' to='/catalog' >Catalog</List>
                    <List activeClassName='active' to='/about'>About</List>
                    <List activeClassName='active' to='/delivery'>Delivery and payment</List>
                    <List activeClassName='active' to='/contacts'>Contacts</List>
                </Nav>
            <CartItems onClick={()=> setShowCart((lastProps)=>!lastProps)}><AiOutlineShoppingCart/></CartItems>
            {showCart && <Cart>
                <Cart.Item />
                <Cart.Item />
                <Cart.Item />
            </Cart>}
        </Container>
    )
}

export default Header
