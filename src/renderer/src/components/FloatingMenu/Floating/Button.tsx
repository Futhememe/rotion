import { ReactNode } from 'react'

interface IFloatingButton {
  title: string
  content: string
  icon: ReactNode
  onClick?: () => void
}

export const FloatingButton = ({ icon, content, title, onClick }: IFloatingButton) => {
  return (
    <div className="flex gap-2 px-3 py-2 cursor-pointer w-full" onClick={() => onClick?.()}>
      <div className="flex h-12 w-12 bg-white rounded-md items-center justify-center text-rotion-900 ">
        {icon}
      </div>

      <div className="flex flex-col justify-center gap-1">
        <h6 className="font-semibold text-rotion-50">{title}</h6>
        <p className="text-sm font-light">{content}</p>
      </div>
    </div>
  )
}
