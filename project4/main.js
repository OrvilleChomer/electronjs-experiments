/**
 *  file:  main.js
 * 
 *  Author:   Orville Chomer
 * 
 *  Github Repo:
 * 
 */

 const { app, BrowserWindow } = require('electron')
 const fs = require('fs')

 let win

 const APP_ENVIRONMENT = "dev"

 app.whenReady().then(() => {
    win = new BrowserWindow({ width: 1400, height: 1000 })

    win.webContents.openDevTools()

    let s = []

    s.push("<!DOCTYPE html>")
    s.push("<html>")
    s.push("<head>")
    s.push('<meta charset="UTF-8">')
    s.push("<title>Dynamically Generated HTML Page ('Server' Sided)</title>")
    s.push('<link rel="stylesheet" type="text/css" href="./styles.css">')
    s.push("</head>")
    s.push("<body>")
    s.push("<h1>Dynamically Generated HTML Page ('Server' Sided)</h1>")
    s.push("<p>This web page was generated on the fly! How cool is that!</p>")
    s.push('<p id="info">???</p>')
    s.push('<hr>')
    s.push('Github Repo:')

    s.push('<script src="./'+APP_ENVIRONMENT+'Environment.js"></script>')

    s.push('<script src="./render.js" defer></script>')
    s.push("</body>")
    s.push("</html>")

    let sContent = s.join("\n")

    try {
        // see:   https://nodejs.dev/en/learn/writing-files-with-nodejs/#:~:text=The%20easiest%20way%20to%20write,writeFile()%20API.

        fs.writeFileSync('./index.html', sContent);
        // file written successfully
      } catch (err) {
        console.error(err);
        return
    } // end of try/catch

    win.loadFile('./index.html')

 })