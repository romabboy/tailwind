import React, { FC, ReactNode, useState } from 'react'
import { ReactComponent as ArrowDownIcon } from '../../images/icon-arrow-down.svg'
import { ReactComponent as ArrowUpIcon } from '../../images/icon-arrow-up.svg'

interface NavItemProps {
    children?: ReactNode,
    text: string
}   

export const NavItem: FC<NavItemProps> = ({ text = '', children }) => {
    const [selected, setSelected] = useState<string>('')

    const openMenuHandler = (event: React.MouseEvent<HTMLSpanElement>) => {
        children && setSelected(text !== selected ? text : '')
    }

    return (
        <div className='relative'>
            <div className="flex space-x-2 cursor-pointer items-center">
                <span
                    className='text-medium-gray hover:text-almost-black select-none'
                    onClick={openMenuHandler}
                >{text}</span>

                {children && selected !== text && <ArrowDownIcon />}
                {children && selected === text && <ArrowUpIcon />}
            </div>
            {selected && children}
        </div>
    )
}
