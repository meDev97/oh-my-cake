import React, { useEffect, useRef, useState } from 'react'
import  firebase from '../../firebase/firebase'
import Cake from '../cake'
import Title from '../title'
import {Container,Items,Base} from './styles/catalog'
import OrderBox from '../orderBox'
import { Scrollbars } from 'rc-scrollbars';
import Loading from '../Loading'

function Catalog() {
    const [cakes, setCakes] = useState([])
    const ref = useRef()
    useEffect(() => {
        firebase.firestore.collection('cakes').get().then(snap=>{
            console.log('snap');
            const cakes = snap.docs.map(cake=>{
                return{
                    id:cake.id,
                    ...cake.data()
                }
            })
            setCakes(cakes)
        })
        .catch(err=>console.log(err))

        return ()=>firebase.firestore.collection('cakes')
    }, [])

    return (
        <Container ref={ref}>
            <Title>pick up your box</Title> 
            <Base>
            <Scrollbars style={{ width: '100%', height: '100vh' }}>
                <Items>
                    {cakes.length>0 ? cakes.map(cake=>(
                            <Cake key={cake.id} cake={cake}/>
                    )): <Loading/>}
                </Items>
            </Scrollbars>
            <OrderBox/>
            </Base>
        </Container>
    )
}

export default Catalog
