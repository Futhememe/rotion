import { app, BrowserWindow, Menu, Tray } from 'electron'
import path from 'node:path'

export function createTray(window: BrowserWindow) {
  const tray = new Tray(path.resolve(__dirname, 'rotionTemplate.png'))

  const menu = Menu.buildFromTemplate([
    {
      label: 'Rotion',
      enabled: false,
    },
    { type: 'separator' },
    {
      label: 'Novo documento',
      click: () => window.webContents.send('new-document'),
    },
    { type: 'separator' },
    { label: 'Documentos recentes', enabled: false },
    {
      label: 'Ignite',
      accelerator: 'CommandOrControl+1',
      acceleratorWorksWhenHidden: false,
    },
    {
      label: 'Documento',
    },
    { type: 'separator' },
    {
      label: 'Sair do rotion',
      role: 'quit',
    },
  ])

  tray.setContextMenu(menu)
}
