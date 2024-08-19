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

export {getProductsDb, getProductDb}