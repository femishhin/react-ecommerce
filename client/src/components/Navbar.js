import React from 'react'
import {  useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Badge, Button, Container } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 

export default function Navbar() {
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity || 0);
  
  return ( 
    <AppBar position="fixed" color="primary" >
        <Container>
          <Toolbar>
            <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
              Logo
            </Typography>
            <Button component={Link} to="/"  color="secondary" sx={{ textTransform: 'none',  color: 'inherit'  }}>
              Home
            </Button>
           
            <Button component={Link} to="/register"  color="secondary" sx={{ textTransform: 'none' , color: 'inherit'  }}>
              Register
            </Button>
            <IconButton component={Link} to="/cart" color="inherit">
              <Badge badgeContent={cartTotalQuantity} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </Container>
    </AppBar> 
  )
}