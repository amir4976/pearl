'use server'

import  ConnectToDb from "@/utils/ConnectToDb";
import User from "@/models/User";


const getAllUsers = async()=>{
    ConnectToDb()
    const users =await User.find()
    return users
}

export default getAllUsers;