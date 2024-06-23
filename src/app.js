const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/auth-route');
const productRoutes = require('./routes/product-route');
const orderRoutes = require('./routes/order-route');

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.status(200).json({message: "oke"})
})
app.use('/api/v1/', authRoutes);
app.use('/api/v1/', productRoutes)
app.use('/api/v1/', orderRoutes)

module.exports = app;