###Complete Node - Notes App (Udemy: Mead, Section 3)
 
https://github.com/ARWL2016/notes-node 
https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/content 

#### Featured Libraries   
1. Yargs 
2. Lodash  
3. Nodemon  
4. Node fs

#### Notes
- This is a command line application which takes notes from the argument when the program is run. For example:   
`node app.js add -t memo -b go to the bank`  
- For a full list of commands: `node app.js --help`
- The notes are stored as objects in the notes-data.json file. The notes are stored and retreived using the node fs module with synchronous readFile and writeFile methods. As the notes are stored as JSON, JSON.stringify is used to store and JSON.parse is used in retrieval. 
- The argv objects is processed through the yargs module which describes parameters for various commands, such as the help text, an alias, and a required boolean ('demand').

#### Playground / Arrow Functions 
- the ARGUMENTS object is an array-like object which returns the arguments passed to a function  
- this does not work in an arrow function, but exposes some (apparently) global information

#### JSON & FileSystem (fs)
- With this module, we can use readFileSync and writeFileSync to create a new file 
- Using JSON.stringify and JSON.parse, we can create a very simple form of database (like local storage) 

#### Try / Catch 
- This app uses  a TRY-CATCH block for reading the database. This way, if there is no value, an empty [] can be returned instead of an error. 

#### ES6 Features 
- const, arrow functions and terse object syntax are used

