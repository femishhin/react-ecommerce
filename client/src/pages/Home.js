import React from 'react';
import ProductList from '../components/ProductList';
import { Typography } from '@mui/material';


export default function Home() {
  return (
    <div> 
        <Typography variant="h4" component="h1" gutterBottom> Shop</Typography>
        <ProductList /> 
    </div>
  )
}
