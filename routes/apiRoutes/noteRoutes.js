// Core Setup
const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/notes');
const notes = require('../../db/db.json');
const { uuid, fromString } = require('uuidv4');
const fs = require('fs');

// reads db and returns all saved notes
router.get('/notes', (req, res) => {
    res.send(notes)
    console.log(notes)
});

// Post function creates new id number
router.post('/notes', (req, res) => {
    // create unique id for each note
    let noteId = uuid();
    let completeNote = {
        id: noteId, 
        title: req.body.title,
        text: req.body.text,
    }
    // Read db file for existing notes
    fs.readFile('./db/db.json', 'utf-8',(error, data) => {
        if (error) throw (error);
        // turn JSON into an object
        let currentNotes = JSON.parse(data);
        // push complete note into current notes
        currentNotes.push(completeNote);
        // turn object back into JSON
        fs.writeFile('./db/db.json', JSON.stringify(currentNotes), (error) => {
            if (error) throw (error);
            res.send(currentNotes);
            console.log('Note created successfully')
        })
    })
});

// // Delete route
// router.delete('/notes/:id', (req, res) => {
    
//      // Read db file for existing notes
//      fs.readFile('./db/db.json', 'utf-8',(error, data) => {
//         if (error) throw (error);
//         // turn JSON existing notes into an object
//         let currentNotes = JSON.parse(data);
//         // push deleted notes into current notes container
//         currentNotes.push(deletedNote);
//         // turn object back into JSON
//         fs.writeFile('./db/db.json', JSON.stringify(currentNotes), (error) => {
//             if (error) throw (error);
//             res.send(currentNotes);
//             console.log('Note deleted successfully')
//         })
// })

// exports module 
module.exports = router;