// initialize variables
const fs = require('fs');
const path = require('path');

// Create a new note
function createNewNote(body, notes) {
    const newNote = body;
    // add note to new array
    notes.push(newNote);
    // adds note to new file
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    // return notes
    return newNote;
}

// Delete a note
function deleteNote(notes, id) {
// how to write a delete function here???

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
}


// export file data
module.exports = {createNewNote, deleteNote }