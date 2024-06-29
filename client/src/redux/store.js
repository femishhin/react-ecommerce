import { createStore, applyMiddleware, combineReducers } from 'redux'
import { thunk } from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './reducers/productsReducer';
import cartsReducer from './reducers/cartReducer';

const rootReducer = combineReducers({ 
    products : productsReducer,
    cart: cartsReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)


export default store;