import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import ProductItem from './ProductItem'; 
import { Grid } from '@mui/material';
 

export default function ProductList() {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.products);
  const {loading, products, error } = productState;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div className='text-center mt-5 mb-5'><div className="spinner-border"><span className="visually-hidden">Loading...</span></div></div>
  }

  if (error) {
    return <div>Error fetching product: {error} </div>
  }
   
  return (
      <Grid container spacing={2} rowSpacing={3}  direction="row" justifyContent="center" alignItems="stretch" >
          {products.map((product) => (
            <ProductItem key={product._id} product={product} /> 
          ))}
      </Grid> 
  )
}
