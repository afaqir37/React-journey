const Product = require('../models/Product')

exports.getProducts = async (req, res) => {
	const Products = await Product.find();
	res.json(Products);
};
