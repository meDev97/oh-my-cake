import { addItem,clearItem,removeItem } from '../actionsHandler'
import * as actions from './cakesTypes'
const initialState = {
    cakes:[],
}

const cakeReducer =(state=initialState,action)=>{
    switch (action.type) {
        case actions.ADD_CAKE:
            return {...state,
                cakes:addItem([...state.cakes],action.payload)
            }
        case actions.REMOVE_CAKE:
            return {...state,
                cakes:removeItem([...state.cakes],action.payload)
            }
        case actions.CLEAR_CAKE:
            return {...state,
                cakes:clearItem([...state.cakes],action.payload)
            }
        case actions.EDIT_CAKES:
            return {...state,
                cakes:[...action.payload]
            }
        case actions.EMPTY_CAKES:
            return {...state,
                cakes:[]
            }

        default:
            return {...state}
}
}

export default cakeReducer;