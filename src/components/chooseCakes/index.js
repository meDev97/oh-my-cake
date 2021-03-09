import React from 'react'
import Cake from '../cake'
import Title from '../title'
import imgCake from '../../images/cake.jpeg'
import {Container,SubTitle,Items} from './styles/chooseCakes'
function ChooseCakes() {
    return (
        <Container>
            <Title>choose your cake</Title>
            <SubTitle> we use both original recipes and classic versions of famous cakes and postrie</SubTitle>
            <Items>
                <Cake imgCake={imgCake} title='coconut' price='2.3'/>
                <Cake imgCake={imgCake} title='coconut' price='2.3'/>
                <Cake imgCake={imgCake} title='coconut' price='2.3'/>
                <Cake imgCake={imgCake} title='coconut' price='2.3'/>
            </Items>
        </Container>
    )
}

export default ChooseCakes
