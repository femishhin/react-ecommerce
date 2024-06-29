import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
}

const initialState = {
    cartItems:  loadCartFromLocalStorage(),
    totalQuantity: loadCartFromLocalStorage().reduce((acc, item) => acc + (item.quantity || 1), 0),
}

const cartsReducer = (state = initialState, action ) => {
    switch(action.type) {
        case ADD_TO_CART:
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.id === item.id);
            const cartItems = existItem
                ? state.cartItems.map((x) => x.id === existItem.id ? { ...x, quantity: x.quantity + 1 } : x)
                : [...state.cartItems, { ...item, quantity: 1 }];
            return {
                ...state,
                cartItems,
                totalQuantity: cartItems.reduce((acc, item) => acc + item.quantity, 0),
            }
        case REMOVE_FROM_CART:
            const filteredCartItems = state.cartItems.filter((x) => x.id !== action.payload);

            return{
                ...state,
                cartItems: filteredCartItems,
                totalQuantity: filteredCartItems.reduce((acc, item) => acc + item.quantity, 0),
            }   
        default:
            return state;
    }
}

export default cartsReducer;