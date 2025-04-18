'use server'

import ConnectToDb from "@/utils/ConnectToDb";
import Comment from "@/models/Comments";


const getAllComments = async ()=>{
    ConnectToDb()
    const comments =await Comment.find().populate("product")
    return comments
}

export default getAllComments;