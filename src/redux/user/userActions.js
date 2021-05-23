import * as actions from './userTypes'

export const setCurrentUser = (user)=>{
return {
    type: actions.SET_CURRENTUSER,
    payload: user
}
}
