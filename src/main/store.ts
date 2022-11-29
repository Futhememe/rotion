import Store from 'electron-store'
import { IDocument } from '../shared/types/ipc'

interface IStore {
  documents: Record<string, IDocument>
}

export const store = new Store<IStore>({
  defaults: {
    documents: {},
  },
})
