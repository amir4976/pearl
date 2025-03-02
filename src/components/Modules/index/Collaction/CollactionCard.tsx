import Image from 'next/image'
import React from 'react'

type Props = {}

function CollactionCard({image,link,title}: Props) {
  return (
    <div className='w-full h-fit flex flex-col gap-2  select-none'>  
      <Image src={'/image/closeup-portrait-sensual-brunette-woman-black-dress-with-bare-shoulders-wear-earrings-rings-grey-background-8.webp'} alt='collaction' width={200} height={200} className='w-full h-full object-cover'/>
    <div className="bg-black flex flex-col justify-center items-center gap-2 h-24">
    <p className='text-white font-DB'>کالکشن جدید پیرل</p>
     <p className=' text-xs'>  اطلاعات بیشتر</p>
    </div>
    </div>
  )
}

export default CollactionCard