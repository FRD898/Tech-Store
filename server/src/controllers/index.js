const { response } = require("express");
let { products } = require("../models");

const cred = {
    email:"freider8998@gmail.com",
    password:"admin"
}
const newLogin = (req, res, next)=>{
    console.log(`Login request ${JSON.stringify(req.body)}`)
    user = req.body
    if (user.email === cred.email && user.password == cred.password){
        res.status(200).json('User exist')
    }else{
        res.status(401).json({ error: "Error, server connection refused" })
    }
};
const newHome = (req, res, next)=>{
    console.log("home request")
    res.json({message: "Server is working"});
};
const getProducts = (req,  res, next)=>{
    console.log("request products")
    res.json({products: products})
}
const removeProduct = (req,  res, next)=>{
    productID = req.body.id;
    console.log(`request delete product ${JSON.stringify(productID)}`)
    new_products = []
    found = false;
    for(let product of products){
        if (product.id != productID){
            new_products.push(product)
        }else{
            found = true;
        }
    }
    products = new_products;
    found?res.status(200).json('Product removed'):res.status(405).json('Cannot find product')
}

const addProduct = (req, res, next)=>{
    product = req.body.product;
    console.log(`request add product ${JSON.stringify(product)}`)
    products.push(product)
    res.status(200).json('Product added')
}

module.exports = {newLogin, newHome, getProducts,removeProduct, addProduct}