import React from "react";
import Flower from "../flower";
import Title from "../title";
import { Container, Text, Items } from "./styles/chooseFlowers";
import img from "../../images/flower.jpg";
function ChooseFlowers() {
  return (
    <Container>
      <Title>Flowers and greeting card for loved ones</Title>
      <Text>
        All girls love sweet gifts. Therefore box with cakes flowers will be an
        exquisite surprise that no one can resist.
      </Text>
      <Items>
        <Flower
          img={img}
          description={"box with different cakes and a bouquet of tulips"}
        />
        <Flower img={img} description={"Decorated Cupcakes with Postcard"} />
        <Flower
          img={img}
          description={"Theme gingerbread cookies and flowers "}
        />
        <Flower
          img={img}
          description={"Roses and marchmallows in a heart box"}
        />
      </Items>
    </Container>
  );
}

export default ChooseFlowers;
