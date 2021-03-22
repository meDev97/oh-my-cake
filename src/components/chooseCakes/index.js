import React, { useEffect, useState } from "react";
import Cake from "../cake";
import Title from "../title";
import imgCake from "../../images/cake.jpeg";
import {
  Container,
  SubTitle,
  Items,
  Base,
  BtnLink,
} from "./styles/chooseCakes";
import firebase  from "../../firebase/firebase";

function ChooseCakes() {
  const [cakes, setCakes] = useState([])
  useEffect(() => {
    firebase.firestore.collection('cakes').get().then(snap=>{
      console.log(snap.docs);
      const cakes = snap.docs.slice(0,8).map(cake=>{
        return {
          id: cake.id,
          ...cake.data()
        }
      })
      setCakes([...cakes])
    })
    .catch(err=>console.log(err))
    return ()=>firebase.firestore.collection('cakes');
  }, [])
  return (
    <Container>
      <Base>
        <Title>choose your cake</Title>
        <SubTitle>
          {" "}
          we use both original recipes and classic versions of famous cakes and
          postrie
        </SubTitle>
      </Base>

      <Items>
        {cakes.length > 0 ? cakes.map(cake=>(
          <Cake key={cake.id} imgCake={cake.image} title={cake.description} price={cake.price} />
        )) : 'spinner'}
        
      </Items>
      <BtnLink to='/catalog'>more cakes</BtnLink>
    </Container>
  );
}

export default ChooseCakes;
