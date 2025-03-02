import React from 'react'
import CollSwiper from '@/components/Modules/index/Collaction/CollactionSwiper'


function CallactionSwiper() {
  return (
    <div className='w-full h-fit  mt-60  CollactionBefore  max-xl:px-10'>
        <div className="ditals flex flex-col gap-3">
            <p className='text-3xl font-DB'>کالکشن جدید پیرل</p>
            <p>برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن</p>
        </div>

        <div className=" mt-5">
        <CollSwiper/>
        </div>
    </div>
  )
}

export default CallactionSwiper