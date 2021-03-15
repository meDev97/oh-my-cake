import React from "react";
import About from "../components/about";
import ChooseCakes from "../components/chooseCakes";
import ChooseFlowers from "../components/chooseFlowers";
import DoubleImgs from "../components/DoubleImgs";
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
        para="Loremkjh fdgdfg dfgdfgfd fgfdgf fdgfdgfd gfdfgfd gfdgdfg sdkjhd sdkhfkjh sdkjhfjh sdjfhkjhdsfkjh"
      />
      {/* section choose cackes  */}
      <ChooseCakes />

      <DoubleImgs
        imgL={imgL}
        title="pick up your box of cakes"
        btn="pick up the box"
        imgR={imgR}
        para="Loremkjh fdgdfg dfgdfgfd fgfdgf fdgfdgfd gfdfgfd gfdgdfg sdkjhd sdkhfkjh sdkjhfjh sdjfhkjhdsfkjh"
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
        para="Loremkjh fdgdfg dfgdfgfd fgfdgf fdgfdgfd gfdfgfd gfdgdfg sdkjhd sdkhfkjh sdkjhfjh sdjfhkjhdsfkjh"
      />

      {/* section delevery and payment  */}
      <Payment />
    </>
  );
}

export default Home;
