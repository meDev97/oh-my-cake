import React from "react";
import {
  GrLocation,
  GrPhone,
  GrTwitter,
  GrFacebook,
  GrInstagram,
} from "react-icons/gr";
import Title from "../title";
import {
  ContainerFluid,
  Container,
  Image_left,
  Image_right,
  Location,
  Media,
  Text,
  Btn,
  Info,
  Title_section,
} from "./styles/doubleimgs";
import { secondary } from "../../constants/colors";
function DoubleImgs(props) {
  const { imgL, title, imgR, btn, para, icons } = props;
  return (
    <div style={{ backgroundColor: secondary }}>
      <ContainerFluid>
        <Container>
          <Title_section>
            <Title>{title}</Title>
          </Title_section>
          <Image_left>
            <img src={imgL} />
          </Image_left>
          {icons && (
            <Location>
              <GrLocation />
              <GrPhone />
            </Location>
          )}
          <Image_right>
            <img src={imgR} />
          </Image_right>
          <Info>
            <Text>{para}</Text>
            <Btn>{btn}</Btn>
          </Info>
          {icons && (
            <Media>
              <GrTwitter />
              <GrFacebook />
              <GrInstagram />
            </Media>
          )}
        </Container>
      </ContainerFluid>
    </div>
  );
}

export default DoubleImgs;
