import React from "react";
import { secondary } from "../../constants/colors";
import Title from "../title";
import {
  ContainerFluid,
  Container,
  ImageLeft,
  ImageRight,
  Text,
  Btn,
  Info,
  TitleSection,
} from "./styles/doubleimgs";

function DoubleImgs(props) {
  const { imgL, title, imgR, btn, para, children } = props;
  return (
    <div style={{ backgroundColor: secondary }}>
      <ContainerFluid>
        <Container>
          <TitleSection>
            <Title>{title}</Title>
          </TitleSection>
          <ImageLeft>
            <img src={imgL} alt="background-img" />
          </ImageLeft>

          <ImageRight>
            <img src={imgR} alt="background-img" />
          </ImageRight>
          <Info>
            <Text>{para}</Text>
            <Btn>{btn}</Btn>
          </Info>
          {children}
        </Container>
      </ContainerFluid>
    </div>
  );
}

export default DoubleImgs;
