console.log('Starting notes.js');


module.exports.addNote = () => {
    console.log('addNote'); 
    return 'New note';
}

module.exports.add = (a, b) => {
    console.log('Add function called');
    return a + b; 
}