export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

 

export const addToCart = (product) => {
    return (dispatch, getState) => {
        dispatch({
            type: ADD_TO_CART,
            payload: product,
        });
        const { cart: { cartItems} } = getState();
        saveCartToLocalStorage(cartItems);
    };
};

export const removeFromCart = (productId) => {
    return (dispatch, getState) => {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: productId,
        });
        const { cart: { cartItems} } = getState();
        saveCartToLocalStorage(cartItems);
    }; 
};

const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
