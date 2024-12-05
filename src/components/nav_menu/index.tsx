import React, { FC, ReactNode } from 'react'
import { ICompany, IFeature } from '../header/constant'
import { MenuItem } from '../menu_item'

interface NavMenuProps<T> {
    items: T[]
}

export function NavMenu<T extends { text: string, icon?: ReactNode }>({ items }: NavMenuProps<T>) {
    return (
        <div className='flex flex-col px-4 py-2 bg-almost-white drop-shadow 
        rounded-lg absolute top-10 right-0 w-36 space-y-2 z-30'>
            {items.map(item => <MenuItem key={item.text} {...item}/>)}
        </div>
    )
}
