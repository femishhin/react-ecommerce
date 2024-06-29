import React from 'react'; 
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/actions/cartActions';
import toast from 'react-hot-toast';
import { Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'; 


export default function ProductItem(props) { 
  const { product } = props;
  const dispatch = useDispatch(); 
  const handleAddToCart = () => {
    
    
    dispatch(addToCart(product));
    toast.success('Added to cart');
  }; 

  return (  
    <Grid  item  xs={12} sm={6} md={3}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} > 
        <CardMedia image={product.thumbnail} component="img"    title="" /> 
        <CardContent> 
          <Typography gutterBottom  variant='h5' component="div">{props.product.title}</Typography>
          <Typography variant='p' component="div">${product.price}</Typography>
          <CardActions>
              <IconButton aria-label="View Details" component={Link} to={`/product/${product._id}`}>
                 <RemoveRedEyeIcon />
              </IconButton> 
              <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
                 <ShoppingCartOutlinedIcon />
              </IconButton>  
          </CardActions>
        </CardContent>
      </Card> 
    </Grid>
  )
}
