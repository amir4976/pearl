import React from 'react'
import Navbar from '../Modules/global/Navbar/Navbar'
import Footer from '../Modules/global/Footer/Footer'



function IndexLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='max-w-8xl mx-auto  realtive'>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default IndexLayout