import * as actions from './userTypes'
const initialState = {
    currentUser:null
}

const userReducer =(state=initialState,action)=>{
    switch (action.type) {
        case actions.SET_CURRENTUSER:
            return {...state,
            currentUser:action.payload
            }
        default:
            return {...state}
}
}

export default userReducer;