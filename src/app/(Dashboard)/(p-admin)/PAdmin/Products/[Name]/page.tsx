import getAllProducts from '@/components/serverActions/getAllProducts.action';
import EditProduct from '@/components/Templates/PAdmin/EditProduct';
import { ProductType } from '@/types/types';
import { redirect } from 'next/navigation';
import React from 'react'


async function page({ params }: { params: { Name: string } }) {
  const { Name } = params;
  const decodedString = decodeURIComponent(Name);
  console.log(decodedString)
  const AllProduct =await getAllProducts()
  const FindProduct = AllProduct.find((product:ProductType) => product.name === decodedString);

  if(!FindProduct){
    return redirect("/not-found")
  }


  return (
    <EditProduct {...JSON.parse(JSON.stringify(FindProduct))}/>
  )
}
 
export default page