interface IFloatingTitle {
  title: string
}

export const FloatingTitle = ({ title }: IFloatingTitle) => {
  return (
    <div className="pl-2 pt-1 pb-1 bg-rotion-800 w-full border-b border-rotion-500">
      <p className="text-xs text-rotion-300 font-semibold">{title}</p>
    </div>
  )
}
