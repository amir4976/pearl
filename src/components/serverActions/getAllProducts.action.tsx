'use server'

import  ConnectToDb from "@/utils/ConnectToDb";
import product from "@/models/product";


const getAllProducts = async()=>{
    ConnectToDb()
    const Products =await product.find()
    return Products
}

export default getAllProducts;