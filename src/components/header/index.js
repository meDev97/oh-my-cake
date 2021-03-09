import React from 'react'
import { Link } from 'react-router-dom'
import {Container,Logo,Nav,Cart,List} from './styles/header'
import LogoImg from '../../images/logo-cake.png'
import {AiOutlineShoppingCart} from 'react-icons/ai'
function Header() {
    return (
        <Container>
                <Logo><Link to='/'><img src={LogoImg}/></Link></Logo>
                <Nav>
                    <List activeClassName='active' to='/catalog' >Catalog</List>
                    <List activeClassName='active' to='/about'>About</List>
                    <List activeClassName='active' to='/delivery'>Delivery and payment</List>
                    <List activeClassName='active' to='/contacts'>Contacts</List>
                </Nav>
            <Cart><AiOutlineShoppingCart/></Cart>
        </Container>
    )
}

export default Header
