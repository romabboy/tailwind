import React, { FC, ReactNode } from 'react'

interface ButtonProps {
  children?: ReactNode
  hasBorder?: boolean
  isFilled?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  hasBorder=false,
  isFilled=false
}) => {
  return (
    <button className={
      `text-medium-gray px-5 py-2 
      ${hasBorder && 'border-2 border-almost-black rounded-lg'}
      ${isFilled && 'text-white bg-black rounded-lg font-bold xl:py-4 xl:px-6 mx-0 hover:bg-transparent hover:text-almost-black border-2 border-almost-black'}
      `}>
        {children}</button>
  )
}
