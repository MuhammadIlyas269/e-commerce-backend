const Product = require("../models/Product");

// POST: products/add
async function addProduct(req, res) {
  try {
    const product = new Product({ ...req.body });
    product.save();
    return res
      .status(201)
      .json({ product: product, message: "Added Successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Unable to add product" });
  }
}

// GET: products/:id
async function getProduct(req, res) {
  const prodId = req.params.id;
  try {
    const product = await Product.findById({ _id: prodId });
    return res.status(201).json({ product: product, message: "Success" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Unable to update product" });
  }
}

// Update Product
// const { title, price, stock, description, category, images } = req.body;

// Get All Products

module.exports = { addProduct, getProduct };