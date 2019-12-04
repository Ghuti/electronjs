const {app, BrowserWindow} = require('electron');

require('electron-reload')(__dirname)

let win

function createWindow() {
  win = new BrowserWindow({
    width: 500,
    height: 600,
    resizable: false,
    icon: 'data:image/png;base64,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'
  })
  win.loadFile('public/index.html')

  //OUVRE LES DEVTOOLS
  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', function() {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
