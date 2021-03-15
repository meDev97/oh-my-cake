import React from "react";
import { primary } from "../../constants/colors";
import { GrTwitter, GrFacebook, GrInstagram } from "react-icons/gr";

import {
  Container,
  NavBar,
  List,
  Subscribe,
  Subtitle,
  Form,
  Input,
  Submit,
  Media,
  Phone,
  Location,
  Icons,
} from "./styles/footer";
function Footer() {
  return (
    <div style={{ borderTop: `2px solid ${primary}` }}>
      <Container>
        <NavBar>
          <List to="/catalog">Catalog</List>
          <List to="/about">About</List>
          <List to="/delivery">Delivery and payment</List>
          <List to="/contacts">Contacts</List>
        </NavBar>
        <Subscribe>
          <Subtitle>Subscribe and learn about promotions</Subtitle>
          <Form>
            <Input type="email" placeholder="email" />
            <Submit type="submit" value="subscribe" />
          </Form>
        </Subscribe>
        <Media>
          <Phone>0999999999999</Phone>
          <Location>san fransico, 234</Location>
          <Icons>
            <GrFacebook />
            <GrInstagram />
            <GrTwitter />
          </Icons>
        </Media>
      </Container>
    </div>
  );
}

export default Footer;
