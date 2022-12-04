import { ReactNode } from 'react'

interface ToCLinkProps {
  children: ReactNode
}

export function ToCLink(props: ToCLinkProps) {
  return <span className="hover:text-rotion-50 cursor-pointer" {...props} />
}
