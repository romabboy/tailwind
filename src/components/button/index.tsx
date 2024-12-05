import React, { FC, ReactNode } from 'react'

interface ButtonProps{
    children: ReactNode
}

export const Button: FC<ButtonProps> = () => {
  return (
    <div>Button</div>
  )
}
