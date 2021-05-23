import {React,useEffect,useState} from 'react';
import { connect } from 'react-redux';
import Order from '../order';
import {v4 as uuidv4} from 'uuid'
import {setAddCake,removeCake,clearCake,emptyCakes} from '../../redux/cakes/cakesActions'
import {addBox,editBox} from '../../redux/box/boxActions'
import {Container, Title, Nums, Num,Btn,Check,Label,TotalOrder,CheckBtn,Error,Edit} from './style/orderBox'
import firebase from '../../firebase'
import boxFor3 from '../../images/boxFor3.jpg'
import boxFor6 from '../../images/boxFor6.jpg'
import boxFor9 from '../../images/boxFor9.jpg'
import { withRouter } from 'react-router';

function OrderBox({cakes,setAddCake,removeCake,clearCake,addBox,emptyCakes,user,box,editBox,history}) {
    const [numCake, setNumCake] = useState(3)
    const [flowers, setflowers] = useState(false)
    const cakeBox =[3,6,9]
    const priceFlower = flowers ? 37 : 0 ;

    useEffect(() => {
        if(box){
            setNumCake(box.numCake)
            setflowers(box.flowers)
        }
    }, [box,cakes])

    const totalPrice= cakes.reduce((total,acc)=>{ 
            return total + (acc.price * acc.quantity)
        },priceFlower)

    const totalQte= cakes.reduce((total,acc)=>{ 
            return total + acc.quantity
        },0)
        
    const pickUpTheBox =()=>{
        if(cakes.length>0){
            if(user){
                if(box){
                    firebase.db.ref(`users/${user.uid}/boxes/${box.id}`).update({
                        cakes,
                        numCake,
                        flowers,
                        total:totalPrice,
                        image:numCake === 3 ? boxFor3 : numCake === 6 ? boxFor6 : boxFor9,
                    })
                    .then(()=>{
                        editBox(null)
                        history.push('/checkout')
                    })    
                }else{
                    firebase.db.ref(`users/${user.uid}/boxes`).push().set({
                    cakes,
                    numCake,
                    flowers,
                    total:totalPrice,
                    image:numCake === 3 ? boxFor3 : numCake === 6 ? boxFor6 : boxFor9,
                    }) 
                }
                
            }else{
                const boxes = JSON.parse(localStorage.getItem('boxes'))||[]
                boxes.push({
                    id:uuidv4(),
                    cakes,
                    numCake,
                    flowers,
                    total:totalPrice,
                    image:numCake === 3 ? boxFor3 : numCake === 6 ? boxFor6 : boxFor9,
                })
                localStorage.setItem('boxes',JSON.stringify(boxes))
            }
            setNumCake(3)
            setflowers(false)
            emptyCakes();
        }
    }
    const numCakes =(num)=>{
        if(box){
            const newEditBox = {
                ...box
            }
            newEditBox.numCake = num
            editBox(newEditBox)
        }else{
            setNumCake(num)
        }   
    }
    const editflowers =(boolean)=>{
        if(box){
            const newEditBox = {
                ...box
            }
            newEditBox.flowers = boolean
            editBox(newEditBox)
        }else{
            setflowers(boolean)
        } 
    }
    return (
        <Container>
            <Title>cakes in a box</Title>
            <Nums>
                {cakeBox.map(item=><Num key={item} active={numCake === item} onClick={()=>numCakes(item)}>{item}</Num>)}
            </Nums>
            <Title>Need flowers?</Title>
            <Check>
                <CheckBtn type='radio' name='flower' id='yes' checked={flowers}  onChange={()=>editflowers(true)}></CheckBtn>
                <Label htmlFor='yes'>yes</Label>
                <CheckBtn type='radio' name='flower' id='no' checked={!flowers} onChange={()=>editflowers(false)}></CheckBtn>
                <Label htmlFor='no'>no</Label>
            </Check>
            <Title>your order</Title>
            
            {cakes.length>0 ? cakes.map(cake=><Order key={cake.id} 
                                                    name={cake.title} 
                                                    price={cake.price} 
                                                    qteNum={cake.quantity} 
                                                    addQteHandler={()=>setAddCake(cake)} 
                                                    removeQteHandler={()=>removeCake(cake)} 
                                                    handlerDelete={()=>clearCake(cake)} />): <Label>choose cake</Label>}
            {flowers && <Order name='Flowers' price={37} qte qteNum={1} handlerDelete={()=>setflowers(false)} />}
            { totalQte> numCake && <Error>your order is exceeded limit of the box {numCake}</Error>}
            <TotalOrder>
                <Title>total: ${totalPrice}</Title>
                {!box && <Btn disabled={ totalQte> numCake} onClick={pickUpTheBox}>pick up the box</Btn>}
            </TotalOrder>
            {box && <OrderBox.Edit history={history} editBox={editBox} pickUpTheBox={pickUpTheBox}/>}
        </Container>
    )
}
OrderBox.Edit = function OrderBoxEdit({totalQte,numCake,history,editBox,pickUpTheBox}){

    const cancelBox=()=>{
        editBox(null)
        emptyCakes()
        history.push('/checkout')
    }
    return <Edit>
        <Btn disabled={ totalQte> numCake} onClick={pickUpTheBox}>update</Btn>
        <Btn disabled={ totalQte> numCake} onClick={cancelBox} color='true'>cancel</Btn>
    </Edit>
}
const mapStateToProps = (state)=>{
    return {
        cakes : state.cakes.cakes,
        user: state.user.currentUser,
        box : state.boxes.editBox,
    }
  }
export default withRouter(connect(mapStateToProps,{setAddCake,removeCake,clearCake,addBox,emptyCakes,editBox})(OrderBox))
