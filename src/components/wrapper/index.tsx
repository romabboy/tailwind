import React, { FC, ReactNode } from 'react'

interface WrapperProps{
    children: ReactNode
}

export const Wrapper: FC<WrapperProps> = ({children}) => {
  return (
    <div className='container mx-auto px py-4 px-2 min-h-screen'>{children}</div>
  )
}
