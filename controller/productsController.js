import { getProductsDb, getProductDb, addProductDb, deleteProductDb } from "../model/productDb.js";


const fetchProducts = async (req,res)=>{
    res.json(await getProductsDb())
}

const fetchProduct = async (req,res)=>{
    res.json(await getProductDb(req.params.id))
}

const addProduct = async (req,res)=>{
    let {prodName,quantity,amount,category,prodUrl,prodDesc} = req.body
    await addProductDb(prodName,quantity,amount,category,prodUrl,prodDesc)
}

const removeProduct = async (req,res)=>{
    await deleteProductDb(req.params.id)
}

export {fetchProducts, fetchProduct, addProduct, removeProduct}