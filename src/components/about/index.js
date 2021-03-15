import React from "react";
import Title from "../title";
import {
  Container,
  Text,
  TextOrder,
  Line,
  Types,
  Type,
  Item,
  TextItem,
} from "./styles/about";
import { FaShippingFast } from "react-icons/fa";
import { GiReceiveMoney, GiCakeSlice } from "react-icons/gi";
function About() {
  return (
    <Container>
      <Title>A bit about us</Title>
      <Text>
        oh, my Cake is a modern bakery that makes cakes. peis, pastries and
        other desserts to order for restaurants, bars cafes, coffee houses and
        catering.
      </Text>
      <Text>
        we use excusively natural ingredients. and this campany policy has not
        changed for many years since its foundation, regardless of the
        environment and circumstances.
      </Text>
      <TextOrder>
        when you order our products, you can Be sure of the quality and
        freshness of our desserts.
      </TextOrder>
      <Types>
        <Type>
          <Item>
            <FaShippingFast />
          </Item>
          <TextItem>fast shipping</TextItem>
        </Type>
        <Line />

        <Type>
          <Item>
            <GiReceiveMoney />
          </Item>
          <TextItem>convenient payment</TextItem>
        </Type>

        <Line />

        <Type>
          <Item>
            <GiCakeSlice />
          </Item>
          <TextItem> unique taste</TextItem>
        </Type>
      </Types>
    </Container>
  );
}

export default About;
