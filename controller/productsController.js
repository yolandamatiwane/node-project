import { getProductsDb, getProductDb, addProductDb, deleteProductDb , editProductsDb , recentProductsDb } from "../model/productDb.js";


const fetchProducts = async (req,res)=>{
    res.json(await getProductsDb())
}

const fetchProduct = async (req,res)=>{
    res.json(await getProductDb(req.params.id))
}

const fetchRecentProducts = async (req,res)=>{
    res.json(await recentProductsDb())
}


const addProduct = async (req,res)=>{
    let {prodName,quantity,amount,category,prodUrl,prodDesc} = req.body
    await addProductDb(prodName,quantity,amount,category,prodUrl,prodDesc)
}

const removeProduct = async (req,res)=>{
    await deleteProductDb(req.params.id)
}


const updateProducts = async (req,res)=>{
    let {prodName,quantity,amount,category,prodUrl,prodDesc} = req.body
    let products = await getProductDb(req.params.id)

    prodName? prodName=prodName : prodName = products.prodName
    quantity? quantity=quantity : quantity = products.quantity
    amount? amount=amount : amount = products.amount
    category? category=category : category = products.category
    prodUrl? prodUrl=prodUrl : prodUrl = products.prodUrl
    prodDesc? prodDesc=prodDesc : prodDesc = products.prodDesc

    res.json(await editProductsDb(req.params.id,prodName,quantity,amount,category,prodUrl,prodDesc))

}
export {fetchProducts, fetchProduct, addProduct, removeProduct , updateProducts, fetchRecentProducts}