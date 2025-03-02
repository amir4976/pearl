import { Facebook } from 'iconsax-react'
import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='w-full h-fit  mt-10 flex flex-col items-center justify-center gap-5 p-5 '>
        <div className="logo">
          <Image src={"/image/Group.png"} alt="logo" width={100} height={100} />
        </div>
        <div className="text-gray-500 text-sm text-wrap max-w-96 text-center " >
          
        برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
        </div>
        <ul className='flex gap-5'>
          <li>صفحه اصلی </li>
          <li>فروشگاه</li>
          <li>تماس با ما</li>
          <li>درباره ما</li>
        </ul>

        <div className="socialMedia flex gap-5">
          <button className='border border-MainColor text-MainColor flex justify-center items-center bg-transparent w-10 h-10 rounded-full hover:bg-MainColor transition-all   hover:text-black '><Facebook/></button>
          <button className='border border-MainColor text-MainColor flex justify-center items-center bg-transparent w-10 h-10 rounded-full hover:bg-MainColor transition-all   hover:text-black '><Facebook/></button>
          <button className='border border-MainColor text-MainColor flex justify-center items-center bg-transparent w-10 h-10 rounded-full hover:bg-MainColor transition-all   hover:text-black '><Facebook/></button>

        </div>
    </div>
  )
}

export default Footer
