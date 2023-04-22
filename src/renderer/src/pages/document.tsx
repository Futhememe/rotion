import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IDocument } from '@shared/types/ipc'
import { Editor, OnContentUpdatedParams } from '../components/Editor'
import { ToC } from '../components/ToC'
import { JSONContent } from '@tiptap/react'

export const Document = () => {
  const [editorContent, setEditorContent] = useState<JSONContent | undefined>(undefined)

  const { id } = useParams<{ id: string }>()

  const { data, isFetching } = useQuery(['document', id], async () => {
    const response = await window.api.fetchDocument({ id: id! })

    return response.data
  })

  const queryClient = useQueryClient()

  const { mutateAsync: saveDocument } = useMutation(
    async ({ title, content }: OnContentUpdatedParams) => {
      await window.api.saveDocument({
        id: id!,
        title,
        content,
      })
    },
    {
      onSuccess: (_, { title }) => {
        queryClient.setQueryData<IDocument[]>(['documents'], (documents) => {
          return documents?.map((document) => {
            if (document.id === id) {
              return { ...document, title }
            }
            return document
          })
        })
      },
    },
  )

  const initialContent = useMemo(() => {
    if (data) {
      return `<h1>${data.title}</h1>${data.content ?? '<p></p>'}`
    }

    return ''
  }, [data])

  const handleEditorContentUpdated = ({ title, content, jsonContent }: OnContentUpdatedParams) => {
    saveDocument({
      title,
      content,
    })
    setEditorContent(jsonContent)
  }

  const handleEditorContentCreated = (content: JSONContent) => {
    setEditorContent(content)
  }

  return (
    <main className="flex-1 flex py-12 px-10 gap-8">
      <aside className="hidden lg:block sticky top-0">
        {/* eslint-disable-next-line prettier/prettier */}
        <span className="text-rotion-300 font-semibold text-xs uppercase">Table of contents</span>
        <ToC.Root>
          {editorContent?.content?.map((content) => {
            if (content.type === 'heading' && content?.attrs?.level === 1) {
              return <ToC.Link>{content?.content?.[0]?.text}</ToC.Link>
            }
            if (content.type === 'heading' && content?.attrs?.level === 2) {
              return (
                <ToC.Section>
                  <ToC.Link>{content?.content?.[0]?.text}</ToC.Link>
                </ToC.Section>
              )
            }
          })}
        </ToC.Root>
      </aside>

      <section className="flex-1 flex flex-col items-center max-h-screen">
        {!isFetching && data && (
          <Editor
            content={initialContent}
            onContentUpdated={handleEditorContentUpdated}
            onCreateEditor={handleEditorContentCreated}
          />
        )}
      </section>
    </main>
  )
}
