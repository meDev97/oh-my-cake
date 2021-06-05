import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Logo,
  Nav,
  NavMobile,
  CartItems,
  List,
  ListMobile,
  Menu,
  Line,
  Back,
} from "./styles/header";
import LogoImg from "../../images/logo-cake.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import Cart from "../cart";
import { connect } from "react-redux";
import firebase from "../../firebase";
function Header({ currentUser }) {
  const [toggleNav, setToggleNav] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [boxes, setBoxes] = useState([]);
  const localBoxes = localStorage.getItem("boxes");
  useEffect(() => {
    const boxesRef = firebase.db.ref(`users/${currentUser?.uid}/boxes`);
    if (currentUser) {
      boxesRef.on("child_added", (data) => {
        setBoxes((oldboxes) => [
          ...oldboxes,
          {
            id: data.key,
            ...data.val(),
          },
        ]);
      });
      boxesRef.on("child_removed", (data) => {
        setBoxes((oldBoxes) => oldBoxes.filter((box) => box.id !== data.key));
      });
    } else {
      const boxes = JSON.parse(localStorage.getItem("boxes")) || [];
      setBoxes(boxes);
    }
    return () => boxesRef.off();
  }, [currentUser, localBoxes]);

  const deleteBox = (boxId) => {
    if (currentUser) {
      firebase.db.ref(`users/${currentUser.uid}/boxes/${boxId}`).remove();
    } else {
      const boxes = JSON.parse(localStorage.getItem("boxes"));
      const newBoxes = boxes.filter((box) => box.id !== boxId);
      localStorage.setItem("boxes", JSON.stringify(newBoxes));
      setBoxes(newBoxes);
    }
  };
  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src={LogoImg} alt="logoImage" />
        </Link>
      </Logo>
      <Nav>
        <li>
          <List activeClassName="active" to="/catalog">
            Catalog
          </List>
        </li>
        <li>
          <List activeClassName="active" to="/about">
            About
          </List>
        </li>
        <li>
          <List activeClassName="active" to="/delivery">
            Delivery and payment
          </List>
        </li>
        <li>
          <List activeClassName="active" to="/contacts">
            Contacts
          </List>
        </li>
      </Nav>
      <CartItems>
        {currentUser ? (
          <BiLogOut onClick={() => firebase.logOut()} />
        ) : (
          <Link to="/login">
            <FaRegUserCircle />
          </Link>
        )}
        <AiOutlineShoppingCart
          onClick={() => setShowCart((lastProps) => !lastProps)}
        />
      </CartItems>
      {showCart && (
        <Cart boxes={boxes} setShowCart={setShowCart} user={currentUser}>
          {boxes.length > 0
            ? boxes.map((box) => (
                <Cart.Item
                  key={box.id}
                  data={box}
                  deleteBox={() => deleteBox(box.id)}
                />
              ))
            : "add a box"}
        </Cart>
      )}
      <Menu onClick={() => setToggleNav((prev) => !prev)}>
        <Line />
        <Line />
        <Line />
      </Menu>
      {toggleNav && (
        <NavMobile>
          <Back onClick={() => setToggleNav(false)}>X</Back>
          <li onClick={() => setToggleNav(false)}>
            <ListMobile activeClassName="active" to="/catalog">
              Catalog
            </ListMobile>
          </li>
          <li onClick={() => setToggleNav(false)}>
            <ListMobile activeClassName="active" to="/about">
              About
            </ListMobile>
          </li>
          <li onClick={() => setToggleNav(false)}>
            <ListMobile activeClassName="active" to="/delivery">
              Delivery and payment
            </ListMobile>
          </li>
          <li onClick={() => setToggleNav(false)}>
            <ListMobile activeClassName="active" to="/contacts">
              Contacts
            </ListMobile>
          </li>
        </NavMobile>
      )}
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};
export default connect(mapStateToProps)(Header);
