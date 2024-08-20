import { getUsersDb, getUserDb, addUserDb, editUsersDb,deleteUserDb,recentUsersDb} from "../model/userDb.js";
import {hash} from 'bcrypt'

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
    let {firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile} = req.body
    hash(userPass,10,async (err,hashedP)=>{
        if(err){
            console.log(hashedP)
        }    
        await addUserDb(firstName,lastName,userAge,Gender,userRole,emailAdd,hashedP,userProfile)
    })
    res.json({message:"User created successfully"})
}

const removeUser = async (req,res)=>{
    await deleteUserDb(req.params.id)
}

const updateUser = async (req,res)=>{
    let {firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile} = req.body
    let user = await getUserDb(req.params.id)

    firstName? firstName=firstName : firstName = user.firstName
    lastName? lastName=lastName : lastName = user.lastName
    userAge? userAge=userAge : userAge = user.userAge
    Gender? Gender=Gender : Gender = user.Gender
    userRole? userRole=userRole : userRole = user.userRole
    emailAdd? emailAdd=emailAdd : emailAdd = user.emailAdd
    // userPass? userPass=userPass : userPass = user.userPass
    userProfile? userProfile=userProfile : userProfile = user.userProfile
    console.log(user)
    if(userPass!=''){
        hash(userPass,10,async (err,hashedP)=>{
            // if(err){
            //     console.log(hashedP)
            // }    
            userPass = hashedP
            await editUsersDb(req.params.id,firstName,lastName,userAge,Gender,userRole,emailAdd,hashedP,userProfile)
        })

    }else{
        userPass = user.userPass
        res.json(await editUsersDb(req.params.id,firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile))
    }

}


const loginUser = (req,res)=>{
    res.json({
        message:"User logged in successfully",
        tokem:req.body.token
    })
}
export {fetchUsers, fetchUser, fetchRecentUser, addUser, removeUser, updateUser, loginUser}