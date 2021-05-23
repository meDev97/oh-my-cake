import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import ListCart from '../components/listCart'
import firebase from '../firebase'
import {editBox} from '../redux/box/boxActions'
import {editCakes} from '../redux/cakes/cakesActions'

function Checkout({currentUser,history,editBox,editCakes}) {
    const [boxes, setBoxes] = useState([])
    useEffect(() => {
        if(currentUser){
            const boxesRef = firebase.db.ref(`users/${currentUser.uid}/boxes`)
            boxesRef.on('child_added',(data)=>{
                setBoxes(oldboxes=>[...oldboxes,{
                    id:data.key,
                    ...data.val()
                }])
            })
            boxesRef.on('child_removed',(data)=>{
                setBoxes(oldBoxes=>oldBoxes.filter(box=>box.id !== data.key)) 
            })
            return ()=>boxesRef.off()
        }
        
    }, [currentUser])

    const deleteCart =(boxId)=>{
        firebase.db.ref(`users/${currentUser.uid}/boxes/${boxId}`).remove()
    }
    const clearCart =()=>{
        firebase.db.ref(`users/${currentUser.uid}/boxes`).remove()
    }
    const editHandler=(data)=>{
        editCakes(data.cakes)
        editBox(data)
        history.push('/catalog')
    }

    return (
        <ListCart clearCart={clearCart}>
            {boxes.length >0 ? boxes.map(box=><ListCart.Item key={box.id} data={box} deleteCart ={()=>deleteCart(box.id)} editHandler={()=>editHandler(box)}/>):'add box'}
        </ListCart>
    )
}
const mapStateToProps = (state)=>{
    return {
        currentUser : state.user.currentUser,
    }
  }
export default withRouter(connect(mapStateToProps,{editBox,editCakes})(Checkout))
