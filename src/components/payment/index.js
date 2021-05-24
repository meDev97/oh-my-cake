import React from "react";
import Title from "../title";
import {
  Container,
  Discount,
  Text,
  LinkText,
  Pay,
  Img,
} from "./styles/payment";
import visa from "../../images/visa.png";
import paypal from "../../images/paypal.png";
import master from "../../images/master.png";
import payonner from "../../images/payonner.png";
function Payment() {
  return (
    <Container>
      <Title>Delivery and payment</Title>
      <Text>
        the courier delivers your orers in St. Petersbrg in a speially equipped
        transport. You can see the delivery zone{" "}
        <LinkText to="">here.</LinkText>
      </Text>
      <Discount>discount 5%</Discount>
      <Text>
        the order can be paid usign cash , card . you can also choose online
        payment and get a 5% discount.
      </Text>
      <Pay>
        <Img>
          <img src={visa} alt="visa" />
        </Img>
        <Img>
          <img src={master} alt="master" />
        </Img>
        <Img>
          <img src={payonner} alt="payonner" />
        </Img>
        <Img>
          <img src={paypal} alt="paypal" />
        </Img>
      </Pay>
    </Container>
  );
}

export default Payment;
