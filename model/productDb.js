import {pool} from '../config/config.js'

const getProductsDb = async ()=>{
    let [data] = await pool.query('SELECT * FROM products')
    return data
}

const getProductDb = async (id)=>{
    let [[data]] = await pool.query(`
        SELECT *
        FROM products
        WHERE prodID =? `,[id])
    return data
}

const addProductDb = async (prodName,quantity,amount,category,prodUrl,prodDesc)=>{
    await pool.query(`
        INSERT INTO products(prodName,quantity,amount,category,prodUrl,prodDesc)
        VALUES (?,?,?,?,?,?)`,[prodName,quantity,amount,category,prodUrl,prodDesc])
}

const deleteProductDb = async (id)=>{
    await pool.query(`
        DELETE
        FROM products
        WHERE prodID = ?`,[id])
}

const recentProductsDb = async()=>{
    let [data] = await pool.query('SELECT * FROM products ORDER BY prodID DESC LIMIT 5')
    return data
}

export {getProductsDb, getProductDb, addProductDb, deleteProductDb, recentProductsDb}