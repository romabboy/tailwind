import { FC, ReactNode } from "react";
import { NavItem } from "../nav-item";
import { NavMenu } from "../nav_menu";
import { COMPANY, FEATURES } from "../header/constant";
import { Button } from "../button";

interface MobileMenuProps {
    children?: ReactNode
    isOpen: boolean
}

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen }) => {
    return (
        <>
            <div className={`absolute top-0 left-0 right-0 bottom-0 bg-almost-black opacity-50 z-10 min-h-[150vh] ${isOpen ? 'flex' : 'hidden'}`}></div>
            <div className={`absolute right-0 top-0 w-1/2 bg-white z-20 justify-center min-h-[150vh] ${isOpen ? 'flex' : 'hidden'}`} onClick={event => event.stopPropagation()}>
                <nav className="my-20 mx-5 space-y-5 text-lg w-full">
                    <NavItem text="Feature">
                        <div className="flex flex-col space-y-5 p-2"><NavMenu items={FEATURES} /></div>
                    </NavItem>
                    <NavItem text="Company">
                        <div className="flex flex-col space-y-5 p-2"><NavMenu items={COMPANY} /></div>
                    </NavItem>
                    <NavItem text='Carears' />
                    <NavItem text='About' />    
                    <div className="flex flex-col space-y-2 mt-20">
                        <Button isFilled={true} >Login</Button>
                        <Button hasBorder={true} >Register</Button>
                    </div>

                </nav>
            </div>
        </>
    );
}
