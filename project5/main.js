/**
 *  file:  main.js
 * 
 *  Author:   Orville Chomer
 * 
 *  Github Repo:   https://github.com/OrvilleChomer/electronjs-experiments/tree/main/project4
 * 
 * 
 */

 const { app, BrowserWindow, shell } = require('electron')
 const fs = require('fs')

 let win

 const APP_ENVIRONMENT = "dev"

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
    s.push('Github Repo Path: &nbsp;&nbsp;&nbsp;&nbsp;  <a target="_blank" href="')
    s.push('https://github.com/OrvilleChomer/electronjs-experiments/tree/main/project4">')
    s.push('https://github.com/OrvilleChomer/electronjs-experiments/tree/main/project4</a><br>')
    s.push('<script src="./'+APP_ENVIRONMENT+'Environment.js"></script>')

    s.push('<script src="./render.js" defer></script>')
    s.push("</body>")
    s.push("</html>")

    let sContent = s.join("\n")

    try {
        // see:   https://nodejs.dev/en/learn/writing-files-with-nodejs/#:~:text=The%20easiest%20way%20to%20write,writeFile()%20API.

        /**
         * To quickly verify the technique, I am writing the file syncronously.
         * Eventually I want to create an asyncronous version too.
         * 
         */
        fs.writeFileSync('./index.html', sContent);
        console.log("index.html file was written successfully");
      } catch (err) {
        console.error(err);
        return
    } // end of try/catch

    win.loadFile('./index.html')

 })