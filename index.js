const {app, BrowserWindow} = require('electron');

require('electron-reload')(__dirname)

let win

function createWindow() {
  win = new BrowserWindow({
    width: 500,
    height: 600,
    resizable: false
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
