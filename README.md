# Electron Experiments
Here I am going to add various little experimental programs using Electron (www.electronjs.org). Maybe you will find these samples useful yourself!

Some of this is going to be samples that are really nothing new... just me practicing!

Some experiments will be trying basic stuff... but a little differently than I've seen... mainly practicing again to come up with sample code that I can possibly find useful in my own projects.

I am doing my development on a Mac.  The editor I am using is VS Code.

You might find some of the content here over-obvious... Wellll... *Captain Obvious Strikes Again!*

## Contents
- Setting up an Electron Environment on your Desktop Computer
- Setting up a new Electron Project
- Running/Testing Your Project -- in your projects directory type in the command:  `npm start`


- Project #1: A simple App with a Window
- Project #2: App window code (renderer.js) Sending Messages to main.js
- Project #3: Same as #2 but it sends a response back to the window code
- Project #n: Modify a window's menu
- Project #n: Button on window brings up an open dialog
- Project #4: main.js code sends a message window code (renderer.js)
- Project #5: Connect to mySQL database, get Schema information, and display it in window
- Project #6: Same as #5 but for a SQL Server database
- Project #7: Same as #5 but for an Oracle Database
- 


#### Setting up a new Electron Project:
I am using the common method of using the command line interface to do this (CLI)... Don't assume though that this is the *only* way that this can be done. Anyways, the steps:
- Create a directory for your project in a place that makes sense... this is where the code for your project is going to reside.
- From the command line, make sure you change directory to that new directory... it becomes your *working directory*.
- Type in:   `npm init` at the command line.  A script will run that will prompt you for various kinds of information.
- When prompted for the **entry point**, enter in: `main.js`
- **author** and **description** can have any value, but these parameters are necessary if you want to package your app (which you will probably want to do eventually... at least for real projects)!
- When you are done working your way through this script's prompts, it will populate your project directory with a boilerplate 'app' (sort of).

One important file that will have been created is the **package.json** file.
It's contents will look something like this:
```
{
   "name": "my-electron-app",
   "version": "1.0.0",
   "description": "a description of my app",
   "main": "main.js",
   "author": "Jane Doe",
   "license": "MIT"
}
```
At this point you've really just created a *Node.js* app. It won't work right yet because there is no *main.js* file yet. You will have to create this file yourself.  We'll get to that a little bit later. 
The next step will make it into an *Electron* app.
- At the command line, type in the command: `npm install --save-dev electron`  ... this will add all the core Electron library dependencies to your project.  Note: These installs can take a little bit of time.
- Bringing up the **package.json** file in your favorite editor, add in the following in your main top-level curly braces:
```
"scripts": {
    "start": "electron ."
  }
```
I put the above just after the "main" parameter.
Yay! At this point you have created your own *Electron* boilerplate app! Also you probably noticed that as a result of running the npm install command above, it added a new section called: "dependencies" and added a reference to the Electron library.

---

#### Running / Testing your Electron project:
- At the command line, make sure you are in the directory of your project.
- Type in the command:  `npm start`  your app will start up.


