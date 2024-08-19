import { pool } from "../config/config.js";

const getUsersDb = async ()=>{
    let [data] = await pool.query('SELECT * FROM users')
    return data
}

const getUserDb = async (id)=>{
    let [[data]] = await pool.query(`
        SELECT *
        FROM users
        WHERE userID =? `,[id])
    return data
}

const addUserDb = async(firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile)=>{
    await pool.query(`
        INSERT INTO users(firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile)
        VALUES (?,?,?,?,?,?,?,?)`,[firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile])
}

const deleteUserDb = async (id)=>{
    await pool.query(`
        DELETE
        FROM users
        WHERE userID = ?`,[id])
}

const recentUsersDb = async()=>{
    let [data] = await pool.query(`
    SELECT *
    FROM users
    ORDER BY userID desc`)
    return data
}

const editUsersDb = async (id,firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile)=>{
    let [data] = await pool.query(`
        UPDATE users
        SET firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile
        WHERE prodID = ?`,[firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile,id])
    return data
}


export {getUsersDb,getUserDb, addUserDb, editUsersDb,deleteUserDb,recentUsersDb}