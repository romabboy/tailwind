import React, { FC } from 'react'
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
import { NavItem } from '../nav-item';
import { NavMenu } from '../nav_menu';
import { COMPANY, FEATURES } from './constant';
// import LogoIcon from '../../images/logo.svg';

export const Header: FC = () => {
    return (
        <header className='flex'>
            <LogoIcon />
            <nav className='flex space-x-6 ml-8 items-center'>
                <NavItem text='Feature'>
                    <NavMenu items={FEATURES} />
                </NavItem>
                <NavItem text='Company'>
                    <NavMenu items={COMPANY} />
                </NavItem>
                <NavItem text='Carears' />
                <NavItem text='About' />
            </nav>
        </header>
    )
}
