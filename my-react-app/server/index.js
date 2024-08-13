const express = require('express');
const Product = require('./models/Product');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/marketplace')
.then(() => console.log("Connected to MangoDB"))
.catch((err) => console.log("Could not connect to MangoDB..."));

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
	res.send("hello world");	
});

app.get('/api/products', (res, req) => {
	// fetch from database
});

// Create new product
app.post("/create", async (req, res) => {
	const newProduct = new Product({
		name: req.body.name,
		description: req.body.description,
		price: req.body.price,
		image: req.body.image
	});
	
	await Product.create(newProduct);
	res.send("Product saved to database!");
});

//Get all products
app.get("/read", async (req, res) => {
	const ProductList = await Product.find();
	res.send(JSON.stringify(ProductList));
});

//Update a product by ID
app.put("/update/:id", async (req, res) => {
	const productId = req.params.id;
	await Product.findByIdAndUpdate(productId, {
		name: req.body.name,
		description: req.body.description,
		price: req.body.price,
		image: req.body.image
	});

	res.send("Product updated successfully");
});

//Delete a product based on id
app.delete("/delete/:id", async (req, res) => {
	const productId = req.params.id;
	await Product.findByIdAndDelete(productId);
	res.send("Product deleted successfully");
});

app.listen(3000, () => {
	console.log('Server started on port 3000');
});






























