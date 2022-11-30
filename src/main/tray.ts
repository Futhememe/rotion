import { app, Menu, Tray } from 'electron'
import path from 'node:path'

app.whenReady().then(() => {
  const tray = new Tray(path.resolve(__dirname, 'rotionTemplate.png'))

  const menu = Menu.buildFromTemplate([
    {
      label: 'Rotion',
    },
  ])

  tray.setContextMenu(menu)
})
