import { FloatingMenu as TipFloatingMenu, FloatingMenuProps } from '@tiptap/react'
import { Floating } from './Floating'
import { Code, TextHOne, TextHThree, TextHTwo } from 'phosphor-react'

interface IFloatingMenu extends Omit<FloatingMenuProps, 'children'> {}

export const FloatingMenu = ({ editor, ...rest }: IFloatingMenu) => {
  return (
    <TipFloatingMenu
      {...rest}
      className="floating-menu"
      editor={editor}
      shouldShow={({ state, view }) => {
        const { selection } = state
        const { $anchor, empty } = selection
        const isRootDepth = $anchor.depth === 1
        const isCommandOnLine =
          $anchor.parent.isTextblock &&
          !$anchor.parent.type.spec.code &&
          $anchor.parent.textContent === '/'

        if (!view.hasFocus() || !empty || !isRootDepth || !isCommandOnLine || !editor.isEditable) {
          return false
        }
        return true
      }}
      tippyOptions={{ placement: 'bottom-start', delay: 600 }}
    >
      <Floating.Root>
        <Floating.Title title="Blocos basicos" />
        <Floating.Button
          icon={<TextHOne size={32} />}
          title="Heading 1"
          content="Big section heading"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        />
        <Floating.Button
          icon={<TextHTwo size={32} />}
          title="Heading 2"
          content="A medium section heading"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        />
        <Floating.Button
          icon={<TextHThree size={32} />}
          title="Heading 3"
          content="Small section heading"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        />
        <Floating.Title title="Blocos de midia" />
        <Floating.Button
          icon={<Code size={32} />}
          title="Code"
          content="Capture a code snippet"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        />
      </Floating.Root>
    </TipFloatingMenu>
  )
}
