import Store from 'electron-store'

interface IStore {
  documents: Record<string, any>
}

export const store = new Store<IStore>({
  defaults: {
    documents: {},
  },
})
