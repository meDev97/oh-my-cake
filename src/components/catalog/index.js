import React, { useEffect, useState } from 'react'
import  firebase from '../../firebase/firebase'
import Cake from '../cake'
import Title from '../title'
import {Container,Items,Base} from './styles/catalog'
import OrderBox from '../orderBox'
import { Scrollbars } from 'rc-scrollbars';
function Catalog() {
    const [cakes, setCakes] = useState([])
    useEffect(() => {
        firebase.firestore.collection('cakes').get().then(snap=>{
            const cakes = snap.docs.map(cake=>{
                return{
                    id:cake.id,
                    ...cake.data()
                }
            })
            setCakes(cakes)
        })
        return ()=>firebase.firestore.collection('cakes')
    }, [])
    return (
        <Container>
            <Title>pick up your box</Title> 
            <Base>
            <Scrollbars style={{ width: '100%', height: '100vh' }}>
                <Items>
                    {cakes.length>0 ? cakes.map(cake=>(
                            <Cake key={cake.id} imgCake={cake.image} title={cake.description} price={cake.price} boxes={6} />
                    )): 'spenner'}
                </Items>
            </Scrollbars>
            <OrderBox/>
            </Base>
        </Container>
    )
}

export default Catalog
