// Native
// Packages
const { app, BrowserWindow, ipcMain } = require('electron')
const isDev = require('electron-is-dev')
const { join } = require('path')
const { format } = require('url')

// Prepare the renderer once the app is ready
app.on('ready', async () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
    },
  })

  const url = isDev
    ? 'http://localhost:8080/'
    : format({
        pathname: join(__dirname, '../build/index.html'),
        protocol: 'file:',
        slashes: true,
      })

  mainWindow.loadURL(url)
  isDev && mainWindow.webContents.openDevTools()
})

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit)

// listen the channel `message` and resend the received message to the renderer process
ipcMain.on('message', (event, message) => {
  event.sender.send('message', message)
})
