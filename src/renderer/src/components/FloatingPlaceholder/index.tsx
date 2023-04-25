import { FloatingMenu, FloatingMenuProps } from '@tiptap/react'
import { TextHOne } from 'phosphor-react'

interface IFloatingMenu extends Omit<FloatingMenuProps, 'children'> {}

export const FloatingPlaceholder = ({ editor, ...rest }: IFloatingMenu) => {
  return (
    <FloatingMenu
      {...rest}
      className="floating-placeholder"
      editor={editor}
      shouldShow={({ state, view }) => {
        const { selection } = state
        const { $anchor, empty } = selection
        const isRootDepth = $anchor.depth === 1
        const isEmptyAndNotHeading =
          $anchor.parent.isTextblock &&
          !$anchor.parent.type.spec.code &&
          !$anchor.parent.textContent &&
          !editor.isActive('heading')

        if (
          !view.hasFocus() ||
          !empty ||
          !isRootDepth ||
          !isEmptyAndNotHeading ||
          !editor.isEditable
        ) {
          return false
        }
        return true
      }}
    >
      <p className="text-xs text-rotion-300 font-medium">Pressione ' / ' para abrir o menu</p>
    </FloatingMenu>
  )
}
