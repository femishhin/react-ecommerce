import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import { removeFromCart } from '../redux/actions/cartActions';
import { Typography } from '@mui/material';


export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const dispatch = useDispatch();
  
  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  }

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  // const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const navigate  = useNavigate();
  const handleCheckout = () => {
    navigate('./../checkout');
  }

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom> Cart</Typography>
      {cartItems.length === 0 ? (
        <p className='text-center'>Your cart is empty.</p>
      ) : (
        <div>
            <table className='table'>
              <tbody>
              {cartItems.map((item) => (
                  <tr key={item.id} className='cart-items'>
                    <td>
                      <img src={item.thumbnail} alt='' className='img-fluid' width='100px' />
                    </td>
                    <td>
                      <h3>{item.title}</h3>
                      <p>Price: ${item.price}</p>
                    </td>
                    <td><button className='btn btn-danger' type='button' onClick={() => handleRemove(item.id)}>Remove</button></td>
                  </tr>
              ))}
              </tbody>
            </table>
           <h2 className='text-end mb-3'>Total Price: ${totalPrice.toFixed(2)}</h2> 
           <div className='text-end mb-3'>
              <button className='btn btn-primary' onClick={handleCheckout}>Proceed to Shipping</button>
            </div>
        </div>
      )}
    </div>
  )
}
