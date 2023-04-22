import { FloatingMenu as TipFloatingMenu, FloatingMenuProps } from '@tiptap/react'
import { Floating } from './Floating'
import { TextHOne } from 'phosphor-react'

interface IFloatingMenu extends Omit<FloatingMenuProps, 'children'> {}

export const FloatingMenu = ({ editor, ...rest }: IFloatingMenu) => {
  return (
    <TipFloatingMenu
      {...rest}
      editor={editor}
      tippyOptions={{ placement: 'bottom-start', delay: 600 }}
    >
      <Floating.Root>
        <Floating.Title title="Blocos basicos" />
        <Floating.Button
          icon={<TextHOne size={32} />}
          title="Heading 1"
          content="Big section heading"
        />
      </Floating.Root>
    </TipFloatingMenu>
  )
}
