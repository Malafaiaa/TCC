import BtnLogin from './Btn-login'
import BtnRegister from './Btn-register'
import "../styles.css"
import BtnJuridico from './Btn-juridico'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'
import SideMenu from './side-menu'


function BtnHeader(props: any) {
    return (
        <>
             <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className='color-black' size={20} />
            </Button>
          </SheetTrigger>

          <SheetContent className="p-0">
            <SideMenu></SideMenu>
          </SheetContent>
        </Sheet>
      
   
        </>
    )
}

export default BtnHeader


{/* <div className="btns-header">
                <BtnLogin />
                <BtnRegister />
                <BtnJuridico />
            </div> */}