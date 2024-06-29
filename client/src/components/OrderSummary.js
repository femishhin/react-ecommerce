import React from 'react';
import { useSelector } from 'react-redux';

export default function OrderSummary() { 
    const cartItems = useSelector((state) => state.cart.cartItems || []);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='card'>
       <div className='card-body'>
        <h4  className='mb-3'>Order Summary</h4>
        <div> 
          {cartItems.map((item) => (
            <div className='d-flex align-items-center border-bottom mb-3' key={item.id}>
              <img src={item.thumbnail} alt={item.name} width={'100px'} className="order-item-image" />
              <div className='ps-3'>
                <h5 className='m-0 p-0'>{item.title}</h5>
                <p className='m-0'>Price: ${item.price}</p>
                {/* <p>Quantity: {item.quantity}</p> */}
              </div>
            </div>
          ))} 
          <div className='mt-3 text-center'>
            <h4>Total Price: ${totalPrice.toFixed(2)}</h4> 
          </div>
        </div>
      </div> 
    </div>
  )
}
