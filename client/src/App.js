import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import theme from './theme';
import './App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';
import Order from './components/Order';
import { Toaster } from 'react-hot-toast';
import Register from './components/Register';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <BrowserRouter>
      <Navbar   />
      <Toaster />
        <Container  sx={{ marginTop: 12 }}>
            <Routes>
              <Route path="/" element={<Home /> } />
              <Route path="/cart" element={<Cart /> } />
              <Route path="/product/:id" element={<ProductDetails /> } />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order" element={<Order />} />
              <Route path="/register" element={<Register />} />
            </Routes>
        </Container>
      <Footer />
    </BrowserRouter>
    </ThemeProvider>
  )
}


