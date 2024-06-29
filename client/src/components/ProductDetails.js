// src/components/ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; 

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching product details');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className='text-center mt-5 mb-5'><div className="spinner-border"><span className="visually-hidden">Loading...</span></div></div>
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='container mt-5 mb-5'>
        <div className="product-details row">
            <div className='col-sm-6'>
                <img src={product.thumbnail} alt={product.name} className="product-image" />
            </div>
            <div className='col-sm-6'>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Brand: {product.brand}</p>
                <p>Category: {product.category}</p>
            </div>
        </div>
    </div>
  );
};

export default ProductDetails;
