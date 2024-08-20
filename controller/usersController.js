import { getUsersDb, getUserDb, addUserDb, editUsersDb,deleteUserDb,recentUsersDb} from "../model/userDb.js";


const fetchUsers = async (req,res)=>{
    res.json(await getUsersDb())
}

const fetchUser = async (req,res)=>{
    res.json(await getUserDb(req.params.id))
}

const fetchRecentUser = async (req,res)=>{
    res.json(await recentUsersDb())
}

const addUser = async (req,res)=>{
    let {firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile} = req.body
    await addProductDb(firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile)
}

const removeUser = async (req,res)=>{
    await deleteUserDb(req.params.id)
}


const updateUser = async (req,res)=>{
    let {firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile} = req.body
    let user = await getUserDb(req.params.id)

    firstName? firstName=firstName : firstName = user.firstName
    lastName? lastName=lastName : lastName = user.lastName
    userAge? userAge=userAge : userAge = user.userAge
    Gender? Gender=Gender : Gender = user.Gender
    userRole? userRole=userRole : userRole = user.userRole
    emailAdd? emailAdd=emailAdd : emailAdd = user.emailAdd
    userPass? userPass=userPass : userPass = user.userPass
    userProfile? userProfile=userProfile : userProfile = user.userProfile

    res.json(await editProductsDb(req.params.id,firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile))
}
export {fetchUsers, fetchUser, fetchRecentUser, addUser, removeUser, updateUser}