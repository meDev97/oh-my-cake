import React from "react";
import { FaTimes } from "react-icons/fa";
import { TiEdit } from "react-icons/ti";
import { withRouter } from "react-router";
import Title from "../title";
import {
  Container,
  Items,
  Item,
  Image,
  Name,
  Qte,
  Price,
  Icon,
  Info,
  Base,
  Buttons,
  Btn,
  Edit,
} from "./styles/listCart";

function ListCart({ children, clearCart, history }) {
  return (
    <Container>
      <Title>shopping cart</Title>
      <Base>
        <Items>
          {children}
          <Buttons>
            <Btn bg onClick={() => history.push("/place-order")}>
              Checkout
            </Btn>
            <Btn onClick={clearCart}>clear all</Btn>
          </Buttons>
        </Items>
      </Base>
    </Container>
  );
}
ListCart.Item = function ListCartItem({ data, deleteCart, editHandler }) {
  const cakesQte = data.cakes.reduce((total, acc) => {
    return total + acc.quantity;
  }, 0);

  return (
    <Item>
      <Image>
        <img src={data.image} alt="cart" />
      </Image>
      <Info>
        <Name>
          {cakesQte === 1 ? "1 cake" : cakesQte + " cakes"} in the box
        </Name>
      </Info>
      <Qte>
        {cakesQte}/{data.numCake}
      </Qte>
      <Price>${data.total}</Price>
      <Edit onClick={editHandler}>
        <TiEdit />
      </Edit>
      <Icon onClick={deleteCart}>
        <FaTimes />
      </Icon>
    </Item>
  );
};
export default withRouter(ListCart);
