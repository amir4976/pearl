import ConnectToDb from "@/utils/ConnectToDb"
import User from "@/models/User"
export const GET = async() =>{
   await ConnectToDb()
    const newUser ={
        userName:'ali',
        name:'ali',
        lastName:'ali',
        email:'ali@gmail.com',
        password:'12345678',
    }
    await User.create(newUser)
    
   return Response.json('datas')
 }