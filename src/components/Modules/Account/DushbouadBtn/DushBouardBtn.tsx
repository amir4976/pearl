import React from 'react'
import Link from 'next/link'
type Props = {
    title:string,
    icon:React.ReactNode
    link:string,
}

function DushBouardBtn({title,icon ,link}: Props) {
  return (
    <Link href={link} className="w-full h-fit py-5 flex justify-center items-center flex-col gap-3 text-white/10 rounded-lg border border-black/10 hover:bg-white/5 hover:text-MainColor transition-all duration-300">
        {icon}
        <p className="text-white  font-dana-req">{title}</p>
    </Link>
  )
}

export default DushBouardBtn