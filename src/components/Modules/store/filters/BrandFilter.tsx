import React from 'react'

function BrandFilter() {
  return (
    <div className="w-full bg-black p-5 rounded-md shadow-black shadow-lg bg-inherit ">
    <div className="text-sm font-DD">فیلتر بر اساس برند</div>
    <div className="flex gap-2 mt-5 flex-col">
      <div className="w-full flex justify-between hover:text-MainColor">
       <p>  دیور</p>
       <div className="w-6 h-6 flex text-xs justify-center items-center rounded-full border border-gray-600 ">3</div>
      </div>

      <div className="w-full flex justify-between   hover:text-MainColor">
       <p>  دیور</p>
       <div className="w-6 h-6 flex text-xs justify-center items-center rounded-full border border-gray-600 ">3</div>
      </div>
    </div>
  </div>
  )
}

export default BrandFilter