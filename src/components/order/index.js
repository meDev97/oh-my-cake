import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import {
  Container,
  Name,
  Qte,
  IconLeft,
  IconRight,
  Num,
  Price,
  Delete,
  PriceDelete,
} from "./styles/order";
function Order({
  qte,
  name,
  price,
  handlerDelete,
  qteNum,
  addQteHandler,
  removeQteHandler,
}) {
  return (
    <Container>
      <Name>{name}</Name>
      {!qte && (
        <Qte>
          <IconLeft onClick={removeQteHandler}>
            <AiOutlineMinusCircle />
          </IconLeft>
          <Num>{qteNum.toFixed(2)}</Num>
          <IconRight onClick={addQteHandler}>
            <AiOutlinePlusCircle />
          </IconRight>
        </Qte>
      )}
      <PriceDelete>
        <Price>${(price * qteNum).toFixed(2)}</Price>
        <Delete onClick={handlerDelete}>
          <MdDeleteForever />
        </Delete>
      </PriceDelete>
    </Container>
  );
}

export default Order;
