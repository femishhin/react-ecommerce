import React from 'react'
import { useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom';

export default function Order() {

    const cartItems = useSelector((state) => state.cart.cartItems || []);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='container'>
        <div className='row  justify-content-center align-items-center'>
            <div className='col-md-6'>
                <div className=' text-center'>
                    <h2> Thank you for your purchase! </h2> 
                    <p>Thank you for choosing us! Your purchase is appreciated. We're committed to providing top-notch products and service. Stay tuned for updates on your order.</p>
                    <p className='fw-bold'>Order Number: <span className='text-danger'>B975166</span></p>

                </div>
                <div className='border'> 
                    {cartItems.map( (item) => (
                        <div key={item._id} className='d-flex align-items-center border-bottom'> 
                            <img src={item.thumbnail} className='img-fluid'  width={'120px'} alt='' /> 
                            <div className='ps-3'>
                                <h4 className='m-0 p-0'>{item.title}</h4>
                                <p className='m-0'>${item.price}</p>
                            </div>
                        </div>
                    ))} 
                </div>      
                <div className='my-3 text-center'>
                    <h4> Total: ${totalPrice.toFixed(2)} </h4>
                </div>
                <div className='text-center'>
                    <Link to="/" className="btn btn-primary">Return to Home</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
