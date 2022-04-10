// Core Setup
const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

// reads db and returns all saved notes
router.get('/notes', (req, res) => {
    res.json(notes)
});

// Post function creates new id number
router.post('/notes', (req, res) => {
    // req.body something to define title, text, id
    
    // saves new note/defines note
    let note = createNewNote(notes, newNote)
    // puts note in JSON format
    res.json(note);
});

// Delete route
router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
})

// exports module 
module.exports = router;