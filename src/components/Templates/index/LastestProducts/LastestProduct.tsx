import LastestProductCard from '@/components/Modules/index/LastestProductCards/LastestProductCard'
import React from 'react'

function LastestProduct() {
  return (
    <div className='w-full mt-40  '>
        <div className="text-center text-3xl font-DB">جدیدترین محصولات</div>

        <div className="grid md:grid-cols-4 grid-cols-2   items-center mt-10 ">
            <div className="col-span-1"><LastestProductCard title={"1"}/></div>
            <div className="col-span-1"><LastestProductCard title={"1"}/></div>
            <div className="col-span-1"><LastestProductCard title={"1"}/></div>
            <div className="col-span-1"><LastestProductCard title={"1"}/></div>
            
            <div className="col-span-1"><LastestProductCard title={"1"}/></div>
            <div className="col-span-1"><LastestProductCard title={"1"}/></div>
            <div className="col-span-1"><LastestProductCard title={"1"}/></div>
            <div className="col-span-1"><LastestProductCard title={"1"}/></div>
        </div>
    </div> 
  )
}

export default LastestProduct
