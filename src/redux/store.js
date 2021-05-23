import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './rout-reducer';


const middlewars =[]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(...middlewars)))


export default store;