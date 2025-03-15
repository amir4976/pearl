import ConnectToDb from "@/utils/ConnectToDb";
import Product from "@/models/Product";
import { redirect } from "next/navigation";

export const GET = async (request: Request, { params }: { params: { id: string } }) => {
    ConnectToDb();
    const { id } = params;
    const products = await Product.findOne({_id:id});
    if(!products){
        redirect('/not-found')
    }
    console.log(products)
    return new Response(JSON.stringify({'datas':products}),{status:200})
}
