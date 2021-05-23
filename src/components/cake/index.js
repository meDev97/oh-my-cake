import React from 'react'
import { AiOutlineShoppingCart,AiOutlinePlus } from 'react-icons/ai'
import { connect } from 'react-redux'
import {Container,Image,Content,InfoCake,Name,Price,Cart,Plus,Icons} from './styles/cake'
import {setAddCake} from '../../redux/cakes/cakesActions'
import {editBox} from '../../redux/box/boxActions'
function Cake({cake,setAddCake,cart,box,editBox}) {
    const {image,title,price}= cake
    const addCake=(item)=>{

        setAddCake(item)

    }
    return (
        <Container>
            <Image><img src={image} loading='lazy' alt='cake'/></Image>
            <Content>
                <InfoCake>
                    <Name>{title}</Name>
                    <Price>$ {price}</Price>
                </InfoCake>
                <Icons>
                    {cart && <Cart><AiOutlineShoppingCart/></Cart>}
                    <Plus onClick={()=>addCake(cake)} ><AiOutlinePlus/></Plus>
                </Icons>
            </Content>
        </Container>
    )
}
const mapStateToProps = (state)=>{
    return {
        box : state.boxes.editBox,
    }
  }
export default connect(mapStateToProps,{setAddCake,editBox})(Cake)
