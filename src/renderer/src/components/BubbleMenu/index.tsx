import { BubbleMenu as TipBubbleMenu, BubbleMenuProps } from '@tiptap/react'
import * as Toggle from '@radix-ui/react-toggle'
import { TextBolder, TextItalic, TextStrikethrough, TextUnderline } from 'phosphor-react'
import clsx from 'clsx'

interface IBubbleMenu extends Omit<BubbleMenuProps, 'children'> {}

export const BubbleMenu = ({ editor }: IBubbleMenu) => {
  return (
    <TipBubbleMenu editor={editor}>
      <Toggle.Root
        className={clsx('p-2 bg-rotion-800 border-rotion-500 border-r-0 border rounded-l', {
          'bg-rotion-600': editor.isActive('bold'),
        })}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <TextBolder size={16} />
      </Toggle.Root>
      <Toggle.Root
        className={clsx('p-2 bg-rotion-800 border-rotion-500 border', {
          'bg-rotion-600': editor.isActive('italic'),
        })}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <TextItalic size={16} />
      </Toggle.Root>
      <Toggle.Root
        className={clsx('p-2 bg-rotion-800 border-rotion-500 border', {
          'bg-rotion-600': editor.isActive('strike'),
        })}
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <TextStrikethrough size={16} />
      </Toggle.Root>
      <Toggle.Root
        className={clsx('p-2 bg-rotion-800 border-rotion-500 border-l-0 border rounded-r', {
          'bg-rotion-600': editor.isActive('underline'),
        })}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <TextUnderline size={16} />
      </Toggle.Root>
    </TipBubbleMenu>
  )
}
