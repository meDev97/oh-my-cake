import React from "react";
import Cake from "../cake";
import Title from "../title";
import imgCake from "../../images/cake.jpeg";
import {
  Container,
  SubTitle,
  Items,
  Base,
  BtnLink,
} from "./styles/chooseCakes";

function ChooseCakes() {
  return (
    <Container>
      <Base>
        <Title>choose your cake</Title>
        <SubTitle>
          {" "}
          we use both original recipes and classic versions of famous cakes and
          postrie
        </SubTitle>
      </Base>

      <Items>
        <Cake imgCake={imgCake} title="coconut" price="2.3" />
        <Cake imgCake={imgCake} title="vanilla" price="2.8" />
        <Cake imgCake={imgCake} title="peach" price="3.5" />
        <Cake imgCake={imgCake} title="coconut" price="2.3" />
      </Items>
      <BtnLink>more cakes</BtnLink>
    </Container>
  );
}

export default ChooseCakes;
