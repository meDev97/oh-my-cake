import * as actions from './boxTypes'

export const addBox = (box)=>{
return {
    type: actions.ADD_BOX,
    payload: box
}
}
export const removeBox = (box)=>{
return {
    type: actions.REMOVE_BOX,
    payload: box
}
}
export const clearBoxes = (box)=>{
return {
    type: actions.CLEAR_BOX,
    payload: box
}
}
export const editBox = (box)=>{
return {
    type: actions.EDIT_BOX,
    payload: box
}
}