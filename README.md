###Complete Node - Notes App

https://github.com/ARWL2016/notes-node 
https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/content 

- Udemy   
- Andrew Mead   
- Section 3   

Technology   
1. Yargs 
2. Lodash
3. Nodemon
4. Node fs

This is a command line application which takes notes from the argument when the program is run. For example:   

`node app.js add -t memo -b go to the bank`  

For a full list of commands: `node app.js --help`

The notes are stored as objects in the notes-data.json file. The notes are stored and retreived using the node fs module with synchronous readFile and writeFile methods. As the notes are stored as JSON, JSON.stringify is used to store and JSON.parse is used in retrieval. 

The argv objects is processed through the yargs module which describes parameters for various commands, such as the help text, an alias, and a required boolean ('demand').

