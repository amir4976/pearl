'use client'
import Link from 'next/link'
import React from 'react'

type Props = {
    title:string,
    link: string
}

function Btn({title, link}: Props) {

  return (
    <div className=' relative  '>
        <div className="btnBefore relative  w-fit">

        <Link href={link} className='w-fit relative   z-10  h-fit px-10 py-3  border border-MainColor  bg-black  text-MainColor'>
            <span>{title}</span>
        </Link>
        </div>
    </div>
  )
}

export default Btn