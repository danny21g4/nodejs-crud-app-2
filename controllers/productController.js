const express = require('express');
const Product = require('../models/productModel');

// to handle async function drawback
const asyncHandler = require('express-async-handler')

const getProducts = async(req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json(products)


    } catch (error){
        console.log(error);
        res.status(500).json({message:error.message})
    }
}

// getting a single product
const getProduct = asyncHandler(async(req,res)=>{  // async handler is used for handling async 
    try{
        // getting id from url
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)


    } catch (error){
        res.status(500)
        throw new Error(error.message)
        console.log(error);
        res.status(500).json({message:error.message})
    }
})

const updateProduct = async(req,res)=>{
    try{
        // getting id from url
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        
        if(!product){  // if item does not maches than
            return res.status(404).json({message:`connot find any product with ID ${id}`})
        }

        const updatedProduct = await Product.findById(id)

        res.status(200).json(updatedProduct)


    } catch (error){
        console.log(error);
        res.status(500).json({message:error.message})
    }
}


const delteProduct = asyncHandler(async(req,res)=>{
    try{
        // getting id from url
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id,req.body);
        
        if(!product){  // if item does not maches than
            res.status(404)
            throw new Error(`connot find any product with ID ${id}`)
            return res.status(404).json({message:`connot find any product with ID ${id}`})
        }

        const updatedProduct = await Product.findById(id)

        res.status(200).json({message:"item deleted"})


    } catch (error){
        console.log(error);
        res.status(500).json({message:error.message})
    }
})

const saveProduct = async(req,res) =>{
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)


    } catch (error){
        console.log(error);
        res.status(500).json({message:error.message})
    }
   
}


module.exports = {
    getProducts,getProduct,updateProduct,delteProduct,saveProduct
};