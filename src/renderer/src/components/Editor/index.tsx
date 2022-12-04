import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import Placeholder from '@tiptap/extension-placeholder'
import Document from '@tiptap/extension-document'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import { EditorContent, JSONContent, useEditor } from '@tiptap/react'
// import { BubbleMenu } from '../BubbleMenu'

export interface OnContentUpdatedParams {
  title: string
  content: string
  jsonContent?: JSONContent
}

interface IEditor {
  content: string
  onContentUpdated: (params: OnContentUpdatedParams) => void
  onCreateEditor?: (content: JSONContent) => void
}

export const Editor = ({ content, onContentUpdated, onCreateEditor }: IEditor) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        document: false,
      }),
      Highlight,
      Typography,
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
    onCreate: ({ editor }) => {
      const jsonContent = editor.getJSON()

      onCreateEditor?.(jsonContent)
    },
    onUpdate: ({ editor }) => {
      const contentRegex = /(<h1>(?<title>.*)<\/h1>(?<content>.*)?)/
      const parsedContent = editor.getHTML().match(contentRegex)?.groups

      const jsonContent = editor.getJSON()

      const title = parsedContent?.title ?? 'Untitled'
      const content = parsedContent?.content ?? ''

      onContentUpdated({ title, content, jsonContent })
    },
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
      {/* {editor && <BubbleMenu editor={editor} />} */}
      <EditorContent className="w-[65ch]" editor={editor} />
    </>
  )
}
