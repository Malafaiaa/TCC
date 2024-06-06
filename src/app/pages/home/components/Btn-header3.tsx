import BtnLogin from './Btn-login'
import BtnRegister from './Btn-register'
import "../styles.css"
import BtnJuridico from './Btn-juridico'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'


import { MenuIcon } from 'lucide-react'
import SideMenu3 from './sidemenu3'


function BtnHeader3(props) {
    return (
        <>
             <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className='color-black' size={20} />
            </Button>
          </SheetTrigger>

          <SheetContent className="p-0">
            <SideMenu3></SideMenu3>
          </SheetContent>
        </Sheet>
      
   
        </>
    )
}

export default BtnHeader3


{/* <div className="btns-header">
                <BtnLogin />
                <BtnRegister />
                <BtnJuridico />
            </div> */}