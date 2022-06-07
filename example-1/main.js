const { app, BrowserWindow } = require('electron')
let win

function createWindow() {
    console.log("createWindow() called")
    const newWin = new BrowserWindow({
      width: 1400,
      height: 600
    })
  
    console.log("about to set the window's HTML file...")
    newwin.loadFile('index.html')

    return newWin
} // end of createWindow()


app.whenReady().then(() => {
    console.log("app is Ready")
    win = createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) win = createWindow()
    }) // end of app.on('activate')

    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') app.quit()
    }) // end of app.on('window-all-closed')

  }) // end of app.whenReady()