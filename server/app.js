const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.options('*', cors());

//  middleware
app.use(bodyParser.json());

//  Routes 
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/user');

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Database 
mongoose.connect(process.env.CONNECTION_STRING)
.then(() =>  {  
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port: http://localhost:${process.env.PORT}/api/users`);
    });
})
.catch((err) =>  {
    console.log(err)
}) 

 
