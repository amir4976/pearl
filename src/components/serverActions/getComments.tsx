'use server'

import { ConnectToDb} from "@/utils/ConnectToDb";
import Comment from "@/models/Comments";


const getAllComments = (productID:string)=>{
    ConnectToDb()
    const comments = Comment.find({product:productID})
    return comments
}

export default getAllComments;