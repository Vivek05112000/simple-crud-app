const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product_model');
const productRoute = require('./routes/product_route');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send("Response from the node API server");
});

mongoose.connect("mongodb://127.0.0.1:27017/crud").then(
    () => {
        console.log("MongoDB connected successfully!!");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    }
).catch(
    () => {
        console.log("Failed to connect to database!!");
    }
)