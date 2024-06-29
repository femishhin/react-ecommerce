import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import axios from 'axios';

export default function Register() {
    const [formData, setFormData] = useState({
       name: '',
       email:'',
       password:'' 
    });
    const { name, email, password} = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async e => {
        e.preventDefault();
        axios.post('http://localhost:4000/api/users/register', formData)
        .then(response => {
            console.log('User registered successfully:', response.data);
        });
    }

  return (
    <Container maxWidth="sm">
        <Box mt={5}>
            <Typography variant="h4" component="h1" gutterBottom> Register </Typography>
            <form onSubmit={onSubmit}>
                <TextField  fullWidth label="Name" name="name"  value={name} onChange={onChange} margin="normal" required />
                <TextField  fullWidth label="Email" name="email"  value={email} onChange={onChange} margin="normal" required />
                <TextField  fullWidth label="Password" type='password' name="password"  value={password} onChange={onChange} margin="normal" required />
                <Box mt={2}>
                    <Button type="submit" variant="contained" color="primary">
                    Register
                    </Button>
                </Box>
            </form>
        </Box>
    </Container>
  )
}
