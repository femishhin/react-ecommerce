import { combineReducers } from 'react-redux';
import cartsReducer from "./cartReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartsReducer
});

export default rootReducer;