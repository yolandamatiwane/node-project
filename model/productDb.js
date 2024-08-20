import {pool} from '../config/config.js'

const getProductsDb = async ()=>{
    let [[data]] = await pool.query('SELECT * FROM products')
    return data
}


const getProductDb = async (id)=>{
    let [data] = await pool.query(`
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
    let [[data]] = await pool.query(`
    SELECT *
    FROM products
    ORDER BY prodID desc
    LIMIT 5`)
    return data
}

const editProductsDb = async (id,prodName,quantity,amount,category,prodUrl,prodDesc)=>{
    let [data] = await pool.query(`
        UPDATE products
        SET prodName = ?,quantity =? ,amount=?,category=?,prodUrl=?,prodDesc=?
        WHERE prodID = ?`,[prodName,quantity,amount,category,prodUrl,prodDesc,id])
    return data
}

export {getProductsDb, getProductDb, addProductDb, deleteProductDb, recentProductsDb, editProductsDb}