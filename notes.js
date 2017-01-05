console.log('Starting notes.js');

const fs = require('fs'); 


module.exports.addNote = (title, body) => {
    console.log(`Title: ${title} \n Body: ${body}`); 
    fs.appendFile('Notes.txt', '{"title": title, "body": body}' );
    return 'New note';
}

module.exports.add = (a, b) => {
    console.log('Add function called');
    return a * b; 
}