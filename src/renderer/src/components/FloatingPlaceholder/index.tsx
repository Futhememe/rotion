import { FloatingMenu, FloatingMenuProps } from '@tiptap/react'
import { TextHOne } from 'phosphor-react'

interface IFloatingMenu extends Omit<FloatingMenuProps, 'children'> {}

export const FloatingPlaceholder = ({ editor, ...rest }: IFloatingMenu) => {
  return (
    <FloatingMenu {...rest} className="floating-placeholder" editor={editor}>
      <p className="text-xs text-rotion-300 font-medium">Pressione ' / ' para abrir o menu</p>
    </FloatingMenu>
  )
}
