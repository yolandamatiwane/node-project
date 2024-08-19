import { getProductsDb, getProductDb } from "../model/productDb.js";


const fetchProducts = async (req,res)=>{
    res.json(await getProductsDb())
}

const fetchProduct = async (req,res)=>{
    res.json(await getProductDb(req.params.id))
}
export {fetchProducts, fetchProduct}