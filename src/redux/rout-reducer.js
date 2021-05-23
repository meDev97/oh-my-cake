import {combineReducers} from 'redux'
import cakeReducer from './cakes/cakesReducer';
import userReducer from './user/userReducer'
import boxReducer from './box/boxReducer';


  const rootReducer = combineReducers({
    user: userReducer,
    cakes:cakeReducer,
    boxes:boxReducer
  });
  
  export default rootReducer;