import React from 'react'

type Props = {
    title:string,
    icon:React.ReactNode
    ,value:number | string

}

function PanelCards({title,icon , value }: Props) {
  return (
    <>  
    <div className={`w-full flex p-3 items-center bg-PannelBg gap-2  rounded-md`} >
      <div className=" w-10 h-10 rounded-xl flex justify-center items-center bg-gray-500">{icon}</div>
      <div className="flex flex-col">
         <p className='text-xl font-DB'>{title}</p>
         <p>{value}</p>
      </div>
    </div>
    
    </>
  )
}

export default PanelCards