# Creating New Electron Projects

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
