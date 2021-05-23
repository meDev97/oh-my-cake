import { addItem,clearItem,removeItem } from '../actionsHandler'
import * as actions from './boxTypes'
const initialState = {
    boxes:[],
    editBox:null,
}

const boxReducer =(state=initialState,action)=>{
    switch (action.type) {
        case actions.ADD_BOX:
            return {...state,
                boxes:addItem([...state.boxes],action.payload)
            }
        case actions.REMOVE_BOX:
            return {...state,
                boxes:removeItem([...state.boxes],action.payload)
            }
        case actions.CLEAR_BOX:
            return {...state,
                boxes:clearItem([...state.boxes],action.payload)
            }
        case actions.EDIT_BOX:
            return {...state,
                editBox:action.payload
            }
        default:
            return {...state}
}
}

export default boxReducer;