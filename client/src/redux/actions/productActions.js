import axios from 'axios';
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE= 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsRequest = () => ({
    type : FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
    type : FETCH_PRODUCTS_SUCCESS,
    payload: products,
});

export const fetcProductsFailure = (error) => ({ 
    type : FETCH_PRODUCTS_FAILURE,
    payload : error,
});

export const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchProductsRequest());
       axios.get('http://localhost:4000/api/products/')
        
        .then(response => { 
           dispatch(fetchProductsSuccess(response.data));
           console.log('Product load successfully');
        })
        .catch(error => {
            dispatch(fetcProductsFailure(error.message))
            console.error('There was an error fetching the products!', error);
        });
    }
}; 