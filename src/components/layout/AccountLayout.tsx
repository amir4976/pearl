import Menu from "../Modules/Account/Manu/Menu"
import Breadcrumbs from "../Modules/global/BradCramp/BradCramp"

function AccountLayout({children}:{children:React.ReactNode}) {
  return (
    <>
        <Breadcrumbs/>
    <div className='flex  mt-10 md:flex-row flex-col' >
        <div className="md:w-1/4 w-full ">
            <Menu />
        </div>
        <div className="flex-1">
            {children}
        </div>
    </div>
    </>
  )
}

export default AccountLayout
