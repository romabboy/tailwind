import React, { FC, ReactNode } from 'react'

interface MenuItemProps {
  icon?: ReactNode
  text: string
}

export const MenuItem: FC<MenuItemProps> = ({ text = '', icon }) => {
  return (
    <div className='flex items-center space-x-4'>
      {icon}
       <span className='text-medium-gray hover:text-almost-black cursor-pointer'>{text}</span>
    </div>
  )
}
