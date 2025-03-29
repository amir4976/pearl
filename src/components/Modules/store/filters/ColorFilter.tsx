import React from 'react'

type Props = {}

function ColorFilter({}: Props) {
  return (
    <div className="w-full bg-black p-5 rounded-md shadow-black shadow-lg bg-inherit ">
            <div className="text-sm font-DD">فیلتر بر اساس برند</div>
            <div className="flex gap-3 mt-5 flex-col">
               
              <div className="w-full flex justify-between hover:text-MainColor ">
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full border border-gray-600 bg-red-600"></div>
                  <p>تیتانیوم</p>
                </div>
               <div className="w-6 h-6 flex text-xs justify-center items-center rounded-full border border-gray-600 ">3</div>
              </div>

              <div className="w-full flex justify-between hover:text-MainColor text-xs">
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full border border-gray-600 bg-yellow-500"></div>
                  <p>طلایی</p>
                </div>
               <div className="w-6 h-6 flex text-xs justify-center items-center rounded-full border border-gray-600 ">3</div>
              </div>

              
            </div>
          </div>
  )
}

export default ColorFilter