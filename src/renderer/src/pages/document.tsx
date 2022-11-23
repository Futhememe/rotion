import React from 'react'
import { Editor } from '../components/Editor'
import { ToC } from '../components/ToC'

export const Document = () => {
  return (
    <main className="flex-1 flex py-12 px-10 gap-8">
      <aside className="hidden lg:block sticky top-0">
        {/* eslint-disable-next-line prettier/prettier */}
        <span className="text-rotion-300 font-semibold text-xs uppercase">Table of contents</span>
        <ToC.Root>
          <ToC.Link>Back-end</ToC.Link>
          <ToC.Section>
            <ToC.Link>banco de dados</ToC.Link>
            <ToC.Link>Autenticacao</ToC.Link>
          </ToC.Section>
        </ToC.Root>
      </aside>

      <section className="flex-1 flex flex-col items-center">
        <Editor />
      </section>
    </main>
  )
}
