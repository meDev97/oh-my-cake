import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Box, Img, Plus, Info, Description } from "./styles/flower";
function Flower({ img, description }) {
  return (
    <Box>
      <Img>
        <img src={img} alt="flower" />
      </Img>
      <Info>
        <Description>{description}</Description>
        <Plus>
          <AiOutlinePlus />
        </Plus>
      </Info>
    </Box>
  );
}

export default Flower;
