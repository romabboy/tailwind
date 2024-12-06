import React, { FC, useState } from 'react'
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
import { ReactComponent as MenuIcon } from '../../images/icon-menu.svg'
import { ReactComponent as MenuCloseIcon } from '../../images/icon-close-menu.svg'
import { NavItem } from '../nav-item';
import { NavMenu } from '../nav_menu';
import { COMPANY, FEATURES } from './constant';
import { Button } from '../button';
import { MobileMenu } from '../mobile_menu';
// import LogoIcon from '../../images/logo.svg';

export const Header: FC = () => {
    const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false)

    const openMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsMobileOpen(!isMobileOpen)
    }

    return (
        <header className='flex items-center'>
            <LogoIcon />
            <nav className='hidden xl:flex space-x-6 ml-8 items-center'>
                <NavItem text='Feature'>
                    <NavMenu items={FEATURES} />
                </NavItem>
                <NavItem text='Company'>
                    <NavMenu items={COMPANY} />
                </NavItem>
                <NavItem text='Carears' />
                <NavItem text='About' />
            </nav>
            <div className="hidden xl:flex ml-auto space-x-5">
                <Button>Login</Button>
                <Button hasBorder={true}>Loggin</Button>
            </div>
            <div
                onClick={openMenu}
                className="flex ml-auto cursor-pointer xl:hidden"
            >
                {isMobileOpen ? <MenuCloseIcon className='relative z-30'/> : <MenuIcon onClick={()=>{setIsMobileOpen(false)}} />}
                <MobileMenu isOpen={isMobileOpen} />
            </div>
        </header>
    )
}
