import { FloatingMenu as TipFloatingMenu, FloatingMenuProps } from '@tiptap/react'
import { Floating } from './Floating'

interface IFloatingMenu extends Omit<FloatingMenuProps, 'children'> {}

export const FloatingMenu = ({ editor, ...rest }: IFloatingMenu) => {
  return (
    <TipFloatingMenu {...rest} editor={editor} tippyOptions={{ placement: 'bottom-start' }}>
      <Floating.Root>
        <Floating.Title title="Blocos basicos" />
        <Floating.Button />
      </Floating.Root>
    </TipFloatingMenu>
  )
}
