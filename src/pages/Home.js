import React from 'react'
import ChooseCakes from '../components/chooseCakes'
import DoubleImgs from '../components/DoubleImgs'
import imgR from '../images/download.jpg'
import imgL from '../images/imageRight.jpg'
function Home() {
    return (
        <>
            <DoubleImgs imgL={imgL} title='own production of cakes' btn='go to selection' imgR={imgR} para='Loremkjh fdgdfg dfgdfgfd fgfdgf fdgfdgfd gfdfgfd gfdgdfg sdkjhd sdkhfkjh sdkjhfjh sdjfhkjhdsfkjh'/>
            <ChooseCakes/> 
            <DoubleImgs imgL={imgL} title='pick up your box of cakes' btn='pick up the box' imgR={imgR} para='Loremkjh fdgdfg dfgdfgfd fgfdgf fdgfdgfd gfdfgfd gfdgdfg sdkjhd sdkhfkjh sdkjhfjh sdjfhkjhdsfkjh'/>
            <DoubleImgs imgL={imgL} title='did not find your cake ?' btn='send request' imgR={imgR} para='Loremkjh fdgdfg dfgdfgfd fgfdgf fdgfdgfd gfdfgfd gfdgdfg sdkjhd sdkhfkjh sdkjhfjh sdjfhkjhdsfkjh'/>
        </>
    )
}

export default Home
