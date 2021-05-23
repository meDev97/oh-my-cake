import * as actions from './cakesTypes'

export const setAddCake = (cake)=>{
return {
    type: actions.ADD_CAKE,
    payload: cake
}
}
export const removeCake = (cake)=>{
return {
    type: actions.REMOVE_CAKE,
    payload: cake
}
}
export const clearCake = (cake)=>{
return {
    type: actions.CLEAR_CAKE,
    payload: cake
}
}
export const emptyCakes = ()=>{
return {
    type: actions.EMPTY_CAKES,
}
}
export const editCakes = (cakes)=>{
return {
    type: actions.EDIT_CAKES,
    payload: cakes
}
}

