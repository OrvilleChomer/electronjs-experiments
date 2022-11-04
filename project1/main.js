/**
 *  file:  main.js
 * 
 *  Author:   Orville Chomer
 * 
 *  Github Repo:   https://github.com/OrvilleChomer/electronjs-experiments/tree/main/project1
 * 
 * 
 */

 const { app, BrowserWindow, shell } = require('electron')

 let win


 app.whenReady().then(() => {
    win = new BrowserWindow({ width: 1400, height: 1000 })

    //win.webContents.openDevTools()
    
    /**
     * Code block below causes hyperlinks clicked on in the window
     * to open up in a web browser window instead of a window in
     * your Electron app.
     * 
     * Note the 'require' line in line 10, I added 'shell' to the 
     * list here in order for this to work!
     * 
     * The link's markup needs to have a:  target='_blank'    in it
     * in order for this to work.
     */
    win.webContents.setWindowOpenHandler(function(values) {
      shell.openExternal(values.url)
    })

    win.loadFile('./index.html')

 })