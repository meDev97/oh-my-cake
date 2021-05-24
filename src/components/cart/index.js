import React, { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { TotalOrder, Title } from "../orderBox/style/orderBox";
import {
  Container,
  Items,
  Item,
  Image,
  Name,
  Info,
  Price,
  Icon,
  Btn,
} from "./styles/cart";
import { withRouter } from "react-router";
function Cart({ children, boxes, setShowCart, user, history }) {
  const totalPrice = boxes.reduce((total, acc) => {
    return total + acc.total;
  }, 0);
  const ref = useRef();
  useEffect(() => {
    const bodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      } else {
        setShowCart(false);
      }
    };
    document.body.addEventListener("click", bodyClick);
    return () => {
      document.body.removeEventListener("click", bodyClick);
    };
  }, []);

  const checkout = () => {
    if (user) {
      history.push("/checkout");
    } else {
      history.push("/login");
    }
    setShowCart(false);
  };

  return (
    <Container ref={ref}>
      <Items>{children}</Items>
      <TotalOrder>
        <Title>total: ${totalPrice}</Title>
        <Btn onClick={checkout}>view cart</Btn>
      </TotalOrder>
    </Container>
  );
}
Cart.Item = function CartItem({ data, deleteBox }) {
  const cakesQte = data.cakes.reduce((total, acc) => {
    return total + acc.quantity;
  }, 0);
  return (
    <Item>
      <Image>
        <img src={data.image} alt="" />
      </Image>
      <Info>
        <Name>
          {cakesQte === 1 ? "1 cake" : cakesQte + " cakes"} in the box
        </Name>
        <Price>${data.total}</Price>
      </Info>
      <Icon onClick={deleteBox}>
        <FaTimes />
      </Icon>
    </Item>
  );
};

export default withRouter(Cart);
