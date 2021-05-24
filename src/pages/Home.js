import React from "react";
import About from "../components/about";
import ChooseCakes from "../components/chooseCakes";
import ChooseFlowers from "../components/chooseFlowers";
import DoubleImgs from "../components/DoubleImgs";
import IconsInfo from "../components/iconsInfo";
import Payment from "../components/payment";

import imgR from "../images/download.jpg";
import imgL from "../images/imageRight.jpg";
function Home() {
  return (
    <>
      <DoubleImgs
        imgL={imgL}
        title="own production of cakes"
        btn="go to selection"
        imgR={imgR}
        para="you don't need a special accosion to order cakes. we will  bring them at any time"
      >
        <IconsInfo>
          <IconsInfo.Location />
          <IconsInfo.Media />
        </IconsInfo>
      </DoubleImgs>
      {/* section choose cackes  */}
      <ChooseCakes />

      <DoubleImgs
        imgL={imgL}
        title="pick up your box of cakes"
        btn="pick up the box"
        imgR={imgR}
        para="choose 4 , 6 or 9 absolutely any cakes we will pack them in a box and deliver it to you . we can also add flowers and a card to the order."
      />

      {/* section a bit about us  */}
      <About />

      {/* section choose flowers  */}
      <ChooseFlowers />

      <DoubleImgs
        imgL={imgL}
        title="did not find your cake ?"
        btn="send request"
        imgR={imgR}
        para="you don't need a special accosion to order cakes. we will  bring them at any time"
      />

      {/* section delevery and payment  */}
      <Payment />
    </>
  );
}

export default Home;
