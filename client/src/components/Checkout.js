import React from 'react';
import OrderSummary from './OrderSummary'; 
import UserInfo from './UserInfo';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

export default function Checkout() {
  const cartItems = useSelector( (state) => state.cart.items )

  const navigate = useNavigate();
  const handlePlaceOrder = () => {
    navigate('/../order',  {state: { cartItems } })
  }
  return (
    <div className='container'>
      <Typography variant="h4" component="h1" gutterBottom> Checkout</Typography> 
      <div className='row'>
        <div className='col-md-8'>
           <UserInfo />
        </div>
        <div className='col-md-4'>
          <OrderSummary  />
          <div className="d-grid gap-2  mt-3">
            <button onClick={handlePlaceOrder} className="btn btn-primary">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}
