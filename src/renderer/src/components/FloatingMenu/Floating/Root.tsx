import { ReactNode } from 'react'

interface IFloatingRoot {
  children: ReactNode
}

export const FloatingRoot = ({ children }: IFloatingRoot) => {
  return (
    <div className="max-w-xs w-80 max-h-72 gap-2 bg-rotion-800 border-rotion-500 border rounded-sm overflow-x-hidden overflow-y-auto">
      {children}
    </div>
  )
}
