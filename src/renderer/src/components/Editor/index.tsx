import Highlight from '@tiptap/extension-highlight'
import Typograph from '@tiptap/extension-typography'
import Placeholder from '@tiptap/extension-placeholder'
import Document from '@tiptap/extension-document'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import { BubbleMenu } from '../BubbleMenu'

interface IEditor {
  content: string
}

export const Editor = ({ content }: IEditor) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        document: false,
      }),
      Highlight,
      Typograph,
      Placeholder.configure({
        placeholder: 'Untitled',
        emptyEditorClass:
          'before:content-[attr(data-placeholder)] before:text-gray-500 before:h-0 before:float-left before:pointer-events-none',
      }),
      Document.extend({
        content: 'heading block*',
      }),
      Underline,
    ],
    content,
    autofocus: 'end',
    editorProps: {
      attributes: {
        class: 'focus:outline-none prose prose-invert prose-headings:mt-0',
      },
    },
  })

  return (
    <>
      {editor && <BubbleMenu editor={editor} />}
      <EditorContent className="w-[65ch]" editor={editor} />
    </>
  )
}
